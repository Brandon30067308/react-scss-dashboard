import { FC } from 'react';
import DashboardStyles from '../Dashboard.module.scss';
import InfoCards from './InfoCards/InfoCards';
import { info, revenueData, salesData, appointment, project } from '../../../types/types';
import Revenue from './Revenue/Revenue';
import Feed from './Feed/Feed';
import Calendar from './Calendar/Calendar';
import Sales from './Sales/Sales';
import Appointments from './Appointments/Appointments';
import Projects from './Projects/Projects';
import useWindowDimensions from './../../../hooks/useWindowDimensions';
import breakpoints from '../../../breakpoints/breakpoints';

interface DashboardContentProps {
  info: info[],
  revenueData: revenueData[];
  salesData: salesData[];
  appointmentsData: appointment[];
  projects: project[];
}

const DashboardContent: FC<DashboardContentProps> =
  ({ info, revenueData,
    salesData, appointmentsData, projects }) => {
    const { width } = useWindowDimensions();

    return (
      <div className={`${DashboardStyles.content} w-100`}>
        <InfoCards info={info} />
        <Revenue revenueData={revenueData} />
        <Feed />
        <Calendar />
        {width >= breakpoints['xl'] && <Sales salesData={salesData} />}
        <Appointments appointmentsData={appointmentsData} />
        <Projects projects={projects} />
      </div>
    );
  }

export default DashboardContent;