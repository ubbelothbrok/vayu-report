import React from 'react';

const Hardware: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>Hardware</h1>
      
      <p>
        This chapter describes the physical hardware platform used to implement the Vayu flight control stack. The hardware 
        design serves as the foundation upon which the software architecture, introduced in the previous chapter, is realized.
      </p>
      <p>
        The system integrates a microcontroller, sensor suite, communication interfaces, and actuator control mechanisms into 
        a cohesive embedded platform. The hardware is selected and configured to support deterministic execution, low-latency 
        data acquisition, and modular abstraction as required by the Vayu architecture.
      </p>

      <h3>In this chapter, we will discuss the following:</h3>
      <ul>
        <li>System Overview</li>
        <li>Microcontroller Unit (MCU)</li>
        <li>Sensors</li>
        <li>Communication Interfaces</li>
        <li>Actuation and Motor Control</li>
        <li>Power Management</li>
        <li>Hardware-Software Co-design</li>
        <li>Design Considerations</li>
      </ul>
    </div>
  );
};

export default Hardware;
