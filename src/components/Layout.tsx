import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="aurora-bg">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
      </div>
      <div className="app-container">
        <Sidebar />
        <div className="main-wrapper">
          <Topbar />
          <main className="content-container">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
