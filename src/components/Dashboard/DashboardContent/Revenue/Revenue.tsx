import { FC } from 'react';
import DashboardStyles from '../../Dashboard.module.scss';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { revenueData } from '../../../../types/types';
import Menu from '../../../common/Menu/Menu';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import breakpoints from '../../../../breakpoints/breakpoints';

interface RevenueProps {
  revenueData: revenueData[]
}

const Revenue: FC<RevenueProps> = ({ revenueData }) => {
  const { width } = useWindowDimensions();


  return (
    <div className={`${DashboardStyles.revenue} round-sm bg-light shadow-sm mt-1-5 flex flex-column
      justify-space-between row-gap-1-75 align-flex-start ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
      <div className="flex justify-space-between w-100">
        <h3 className="font-xl text-muted weight-500">Sales / Revenue</h3>
        <Menu
          alt={true}
          menuGroups={[{ children: ['action...', 'another action...'] }]}
        />
      </div>
      <div className="w-100 h-100 flex justify-flex-start">
        <ResponsiveContainer width="100%" height="100%" className={DashboardStyles.rechartsContainer}>
          <BarChart
            data={revenueData}
            margin={{
              top: 0,
              right: 0,
              left: width >= breakpoints['sm'] ? -23 : -28,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" tickLine={false}
              fontFamily={'PT Mono'} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Bar dataKey="ly" stackId="a" fill="#3e80ea"
              barSize={width >= breakpoints['sm'] ? 15 : 8} />
            <Bar dataKey="ty" stackId="a" fill="#9cbef4"
              barSize={width >= breakpoints['sm'] ? 15 : 8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Revenue;