import React from 'react';

const Vayu: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>Vayu Flight Control Stack</h1>
      <p>
        The capstone component integrating NavHAL and VAIOS. It manages the estimation algorithms (EKF), control algorithms (PID/LQR), 
        and high-level mission state machines.
      </p>
      <p>
        Vayu unifies the hardware interfacing with the algorithmic processing to deliver reliable autonomous capabilities.
      </p>
    </div>
  );
};

export default Vayu;
