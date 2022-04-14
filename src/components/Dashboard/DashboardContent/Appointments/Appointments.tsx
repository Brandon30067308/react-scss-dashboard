import { FC } from 'react';
import breakpoints from '../../../../breakpoints/breakpoints';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { appointment } from '../../../../types/types';
import Menu from '../../../common/Menu/Menu';
import DashboardStyles from '../../Dashboard.module.scss';

interface AppointmentsProps {
  appointmentsData: appointment[];
}

const Appointments: FC<AppointmentsProps> = ({ appointmentsData: appData }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.appointments} bg-light mt-1-5 ml-1 shadow-sm round-sm flex 
      flex-column row-gap-2-25 justify-flex-start ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
      <header className="flex justify-space-between w-100">
        <h3 className="font-xl text-dark weight-500">Appointments</h3>
        <Menu alt={true} menuGroups={[{ children: ['action...', 'another action...'] }]} />
      </header>
      <div>
        <ul className={`${DashboardStyles.appsContainer} relative pl-2 flex flex-column justify-flex-start row-gap-0-85`}>
          {
            appData.map((i, index) => (
              <li
                key={`app-data-${index}`}
                className={`${DashboardStyles.app} relative w-100 
                flex flex-column align-flex-start row-gap-0-5`}>
                <div className="w-100 flex justify-space-between">
                  <h3 className="font-md weight-500">
                    {i.title}</h3>
                  <span className="text-muted font-sm text-align-right">{i.timeDiff}</span>
                </div>
                <div className={`${DashboardStyles.appText} font-md`}>
                  {i.body}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Appointments;