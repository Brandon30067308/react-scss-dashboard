import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faFilter, faCalendar } from '@fortawesome/free-solid-svg-icons';
import DashboardStyles from '../Dashboard.module.scss';
import Menu from '../../common/Menu/Menu';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import breakpoints from '../../../breakpoints/breakpoints';

const DashboardHeader: FC = () => {
  const { width } = useWindowDimensions();
  return (
    <header className={`flex w-100 ${width >= breakpoints['xs'] ?
      'justify-space-between' :
      'justify-flex-end'}`}>
      {width >= breakpoints['xs'] && <h3 className="font-3xl weight-500">Dashboard</h3>}
      <div className="flex column-gap-0-75">
        <Menu
          classes={'bg-light text-dark shadow-sm px-0-5 py-0-45 round-sm'}
          menuGroups={[{
            children: [
              <div className="w-100 flex column-gap-0-35">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="font-md icon-muted"
                />
                <span className="icon-muted">Today</span>
              </div>
            ]
          }]}
          showCaveat={true}
        />
        <div className="flex column-gap-0-25">
          <button className={`${DashboardStyles.headerIcon} p-0-65 px-0-75 bg-primary 
            flex round-xs pointer shadow-sm`}>
            <FontAwesomeIcon icon={faSyncAlt}
              className="icon-light font-xs" />
          </button>
          <button className={`${DashboardStyles.headerIcon} py-0-65 px-0-75 bg-primary 
            flex round-xs pointer shadow-sm`}>
            <FontAwesomeIcon icon={faFilter}
              className="icon-light font-xs" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;