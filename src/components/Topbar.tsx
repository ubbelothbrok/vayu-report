import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="topbar glass">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-main)' }}>Technical Documentation</h3>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>NAVRobotec</div>
      </div>
    </header>
  );
};

export default Topbar;
