import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, background: 'linear-gradient(90deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Technical Documentation</h3>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent-color)' }}>NAVRobotec</div>
      </div>
    </header>
  );
};

export default Topbar;
