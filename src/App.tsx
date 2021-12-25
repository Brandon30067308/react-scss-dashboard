import { useState } from 'react';
import AppStyles from './App.module.scss';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import useWindowDimensions from './hooks/useWindowDimensions';
import breakpoints from './breakpoints/breakpoints';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  return (
    <div
      className={`${AppStyles['app-container']} h-100 w-100 flex justify-flex-start align-flex-start`}
      style={{
        overflowX: isSidebarOpen ? 'inherit' : 'hidden'
      }}
    >
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`flex flex-column justify-flex-start h-100 w-100 ${width >= breakpoints['xs'] ?
          'row-gap-2-5' : 'row-gap-1-25'}`}
        style={{
          minWidth: isSidebarOpen ?
            width >= (breakpoints['lg'] + 260) ? 'unset' : '100%' :
            '280px'
        }}
      >
        <Nav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Dashboard />
        <Footer />
      </div>
    </div >
  );
}

export default App;
