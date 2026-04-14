import React from 'react';

const NavHAL: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>NavHAL</h1>
      <p>
        NavHAL (Navigation Hardware Abstraction Layer) provides the foundational hardware independence layer of the Vayu project. 
        It isolates the high-level flight logic from the low-level vendor-specific microcontroller dependencies.
      </p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderLeft: '4px solid var(--accent-color)' }}>
        <p style={{ margin: 0, color: 'var(--text-main)' }}>
          Detailed discussion on NavHAL architecture, API specifications, and performance metrics are documented here.
        </p>
      </div>
    </div>
  );
};

export default NavHAL;
