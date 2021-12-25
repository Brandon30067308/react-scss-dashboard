import { FC } from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader';
import DashboardContent from './DashboardContent/DashboardContent';
import infoData from '../../data/infoData';
import revenueData from '../../data/revenueData';
import salesData from '../../data/salesData';
import appointmentsData from './../../data/appointmentsData';
import projects from './../../data/projectsData';
import useWindowDimensions from './../../hooks/useWindowDimensions';
import breakpoints from './../../breakpoints/breakpoints';

const Dashboard: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`w-100 flex flex-column justify-flex-start align-flex-start 
        ${width >= breakpoints['xs'] ? 'px-2 row-gap-1-75' : 'px-0-35 row-gap-1'}`}
    >
      <DashboardHeader />
      <DashboardContent
        info={infoData}
        revenueData={revenueData}
        salesData={salesData}
        appointmentsData={appointmentsData}
        projects={projects}
      />
    </div>
  )
}

export default Dashboard;