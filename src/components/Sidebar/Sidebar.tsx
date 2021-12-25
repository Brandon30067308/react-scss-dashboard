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
    className={`${SidebarStyles.container} flex flex-column w-100 justify-flex-start pb-1-75 row-gap-1-85`}
    style={{ marginLeft: `${isOpen ? '0' : '-260px'}` }}
  >
    <header className={`${SidebarStyles.header} w-100 text-align-center flex`}>
      <h3 className="font-2xl weight-500 text-light">Sidebar</h3>
    </header>
    <div
      className="w-100 px-1"
      style={{ height: '100vh' }}
    >
      {data.map((d, di) => (
        <div
          key={`sidebard-data-${di}`}
          className="w-100 pb-1-5"
        >
          <h3 className="weight-500 font-md text-light text-align-left w-100">{d.header}</h3>
          <div className="pl-0-5 pt-1-25 flex flex-column align-flex-start">
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
              <a
                key={`sidebard-item-${ci}`}
                href="#"
                className={`${SidebarStyles.item} pb-1-35 pointer font-md`}
              >{c}</a>)}
          </div>
        </div>))}
    </div>
  </div>
)

export default Sidebar;