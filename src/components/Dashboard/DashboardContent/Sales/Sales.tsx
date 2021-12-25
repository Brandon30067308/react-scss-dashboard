import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import DashboardStyles from '../../Dashboard.module.scss';
import { salesData } from '../../../../types/types';
import Menu from '../../../common/Menu/Menu';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import breakpoints from './../../../../breakpoints/breakpoints';

interface SalesProps {
  salesData: salesData[];
}

const colors = [
  '#3e80ea', '#e5a54b', '#d1332e', '#f0f0f0'
];

const Sales: FC<SalesProps> = ({ salesData }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.sales} bg-light mt-1-5 ml-1 shadow-sm round-sm flex flex-column
      row-gap-1-25 justify-flex-start ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
      <header className="flex justify-space-between w-100">
        <h3 className="font-xl text-dark weight-500">Weekly Sales</h3>
        <Menu alt={true} menuGroups={[{ children: ['action...', 'another action...'] }]} />
      </header>
      <div className="w-100 h-100 flex flex-column">
        <ResponsiveContainer width="100%" height={215}>
          <PieChart>
            <Tooltip />
            <Pie data={salesData}
              label={false}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}>
              {
                salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`}
                    strokeWidth="3.5px"
                    fill={colors[index]} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* tabular representation of data */}
        <table className={`${DashboardStyles.salesTable} w-100`}>
          <thead>
            <tr>
              <th className="font-lg weight-500 text-muted text-align-left">Source</th>
              <th className="font-lg weight-500 text-muted text-align-center">Revenue</th>
              <th className="font-lg weight-500 text-muted text-align-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {
              salesData.map((i, index) => (
                <tr key={`sales-data-${index}`}>
                  <td className="flex column-gap-0-35 font-md text-muted justify-flex-start">
                    <span className="p-0-5 round-xs"
                      style={{
                        background: `${colors[index]}`,
                      }}></span>{i.source}</td>
                  <td className="font-md text-muted text-align-center">$ {i.revenue}</td>
                  <td className="font-md text-muted text-align-right"
                    style={{
                      color: `${i.value > 0 ? '#42bd6d' :
                        '#d1332e'}`
                    }}>{i.value > 0 ? '+' : '-'}{i.value}%</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sales;