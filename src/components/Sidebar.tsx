import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Cpu, LayoutTemplate, Box, Network, Settings, Compass, Layers, CheckCircle, Flag } from 'lucide-react';

const routes = [
  { path: '/abstract', name: 'Abstract', icon: <FileText size={18} /> },
  { path: '/introduction', name: 'Introduction', icon: <Flag size={18} /> },
  { path: '/preliminaries', name: 'Preliminaries', icon: <Box size={18} /> },
  { path: '/architecture', name: 'Architecture', icon: <LayoutTemplate size={18} /> },
  { path: '/hardware', name: 'Hardware', icon: <Cpu size={18} /> },
  { path: '/navhal', name: 'NavHAL', icon: <Compass size={18} /> },
  { path: '/vaios', name: 'VAIOS', icon: <Layers size={18} /> },
  { path: '/vayu', name: 'Vayu Flight Stack', icon: <Network size={18} /> },
  { path: '/results', name: 'Results', icon: <CheckCircle size={18} /> },
  { path: '/conclusion', name: 'Conclusion', icon: <Settings size={18} /> },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <h2>Vayu Report</h2>
      </div>
      <div className="nav-menu">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {route.icon}
            <span>{route.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
