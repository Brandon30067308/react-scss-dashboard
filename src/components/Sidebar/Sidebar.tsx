import { FC } from 'react';
import SidebarStyles from './Sidebar.module.scss';
import Dropdown from '../common/Dropdown/Dropdown';
import projects from '../../data/projectsData';
import { DropdownChild } from '../common/Dropdown/Dropdown';

interface sidebarData {
  header: string;
  children: (string | DropdownChild)[]
}

const data: sidebarData[] = [
  {
    header: 'Pages',
    children: [
      'Profile',
      {
        header: { content: 'Projects' },
        children: projects.map(p => p.name)
      },
      'Settings',
      'Tasks',
      'Clients',
      'Chat'
    ]
  },
  {
    header: 'Tools',
    children: [
      {
        header: { content: 'Income' },
        children: ['Annual', 'Monthly']
      },
      {
        header: { content: 'Orders' },
        children: ['Pending', 'Completed']
      }
    ]
  },
  {
    header: 'Plugins & Addons',
    children: [
      'Revenue Data',
      'Sales Data',
      {
        header: { content: 'Charts' },
        children: ['Sales Chart']
      },
      'Notifications',
      'Maps',
      'Calendar',
      'Multi level'
    ]
  }
]

const Sidebar: FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div
    className={`${SidebarStyles.container} flex flex-column w-100 justify-flex-start px-0-65 pb-2-35 
      row-gap-1-85`}
    style={{ marginLeft: `${isOpen ? '0' : '-260px'}` }}
  >
    <header className={`${SidebarStyles.header} w-100 text-align-center flex`}>
      <h3 className="font-2xl weight-500 text-light">Sidebar</h3>
    </header>
    <div
      className="w-100 px-1"
    >
      {data.map((d, di) => (
        <div
          key={`sidebard-data-${di}`}
          className={`${di === data.length - 1 ? 'mb-0' : 'mb-2-35'} w-100`}
        >
          <h3 className="weight-500 font-md text-light text-align-left w-100">{d.header}</h3>
          <div className="pl-0-5 pt-1-25 flex flex-column align-flex-start row-gap-1-35">
            {d.children.map((c, ci) => typeof c !== 'string' ?
              <Dropdown
                key={`sidebard-item-${ci}`}
                item={
                  {
                    header: c.header,
                    children: c.children
                  }
                }
              /> :
              <span
                key={`sidebard-item-${ci}`}
                className={`${SidebarStyles.item} w-100 pointer font-md`}
              >{c}</span>)}
          </div>
        </div>
      ))}
    </div>
    <div className={`${SidebarStyles.popup} flex flex-column px-1-35 py-1-65 row-gap-1 
      align-flex-start round-md w-100`}>
      <h3 className="weight-500 font-md text-light">Monthly Sales Report</h3>
      <p className="font-sm text-light">Your monthly sales report is ready for download!</p>
      <button className="bg-primary round-sm text-light p-0-85 w-100 pointer text-sm">Download</button>
    </div>
  </div>
)

export default Sidebar;