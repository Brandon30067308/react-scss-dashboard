import { FC, useState } from 'react';
import { project } from '../../../../types/types';
import Menu from '../../../common/Menu/Menu';
import DashboardStyles from '../../Dashboard.module.scss';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import breakpoints from '../../../../breakpoints/breakpoints';

interface ProjectsProps {
  projects: project[];
}

const colors = {
  'Finished': 'green',
  'In progress': 'orange',
  'Cancelled': 'red'
}

const divideProjects = (projects: project[]): Array<{ projects: project[], index: number }> => {
  let store: Array<{ projects: project[], index: number }> = [];
  let currIndex = 0;
  projects.forEach((project, i) => {
    if (store[currIndex]) store[currIndex].projects.push(project);
    else store[currIndex] = { projects: [project], index: currIndex };
    i === 5 && ++currIndex;
  });
  return store;
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const entries = divideProjects(projects);
  const [entry, setEntry] = useState<{ projects: project[], index: number }>(entries[0]);
  const { width } = useWindowDimensions();

  return (
    <div className={`${DashboardStyles.projects} bg-light mt-1-5 shadow-sm round-sm flex flex-column 
      justify-flex-start row-gap-2 ${width >= breakpoints['xs'] ? 'py-1-25' : 'py-0-85'}`}>
      <header className={`flex justify-space-between w-100 ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'}`}>
        <h3 className="font-xl text-dark weight-500">Projects</h3>
        <Menu alt={true} menuGroups={[{ children: ['action...', 'another action...'] }]} />
      </header>
      <div className={`${DashboardStyles.tableContainer} w-100`}>
        <table className={`$${DashboardStyles.projectsTable} w-100`}>
          <thead className="w-100">
            <tr>
              <th className={`font-lg weight-500 text-muted text-align-left 
                ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}>Name</th>
              <th className={`font-lg weight-500 text-muted text-align-left 
                ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}>Start Date</th>
              <th className={`font-lg weight-500 text-muted text-align-left 
                ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}>End Date</th>
              <th className={`font-lg weight-500 text-muted text-align-left 
                ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}>Status</th>
              <th className={`font-lg weight-500 text-muted text-align-left 
              ${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}>Assignee</th>
            </tr>
          </thead>
          <tbody>
            {
              entry.projects.map(({ name, startDate, endDate, status, assignee }, index) => (
                <tr key={`project-item-${index}`}
                  className={`${(index + 1) % 2 === 0 ? 'even' : 'odd'}`}>
                  <td className={`${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}
                  >{name}</td>
                  <td className={`${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}
                  >{startDate.toLocaleDateString()}</td>
                  <td className={`${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}
                  >{endDate.toLocaleDateString()}</td>
                  <td className={`${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}
                  ><span className={`bg-${colors[status]} font-xs 
                    text-light px-0-35 py-0-15 round-xs`}>{status}</span></td>
                  <td className={`${width >= breakpoints['xs'] ? 'px-1-25' : 'px-0-85'} py-0-85`}
                  >{assignee}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className={`flex w-100 justify-space-between pt-1-5 px-1-25 
          ${width <= breakpoints['sm'] ? 'flex-column align-flex-start row-gap-0-45' : 'column-gap-0-45'}`}>
          <span>{`Showing ${(entry.index * 6) + 1} to 
            ${projects.length >= ((entry.index + 1) * 6) ? ((entry.index + 1) * 6) : (projects.length)}
            of ${projects.length} entries`}</span>
          <div className="flex column-gap-0-15">
            <button
              disabled={entry.index === 0}
              className="px-1 font-sm py-0-65 pointer border-primary bg-light"
              onClick={() => entry.index !== 0 && setEntry(entries[entry.index - 1])}
            >Previous</button>
            {entries.map(e => (
              <div
                key={`table-entry-${e.index}`}
                className={`font-sm px-0-85 py-0-5
                pointer ${entry.index !== e.index ? 'border-primary text-dark' : 'bg-primary text-light'}`}
                onClick={() => setEntry(entries[e.index])}>{e.index + 1}</div>
            ))}
            <button
              disabled={entry.index === entries.length - 1}
              className="px-1 font-sm py-0-65 pointer border-primary bg-light"
              onClick={() => entry.index !== entries.length - 1 && setEntry(entries[entry.index + 1])}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;