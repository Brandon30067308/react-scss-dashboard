import { FC } from 'react';
import DashboardStyles from '../../Dashboard.module.scss';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Menu from '../../../common/Menu/Menu';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import breakpoints from './../../../../breakpoints/breakpoints';

const Calendar: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.calendar} bg-light round-sm shadow-sm mt-1-25 
      row-gap-2-25 flex justify-flex-start flex-column ${width >= breakpoints['xs'] ? 'p-1-25' : 'p-0-85'}`}>
      <header className="flex justify-space-between w-100">
        <h3 className="font-xl text-dark weight-500">Calendar</h3>
        <Menu alt={true} menuGroups={[{ children: ['action...', 'another action...'] }]} />
      </header>
      <div className={`${DashboardStyles.container} w-100`}>
        <ReactCalendar
          selectRange={true}
          defaultValue={new Date()}
          minDate={new Date(2015, 6, 1)}
          maxDate={new Date(2028, 12, 31)}
        />
      </div>
    </div>
  );
}

export default Calendar;