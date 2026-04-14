import React from 'react';

const Architecture: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>System Architecture</h1>
      
      <p>
        This chapter presents the overall system architecture of the Vayu flight control stack. Building upon the foundational 
        concepts introduced in the previous chapter, we now describe how these elements are integrated into a cohesive and 
        structured system.
      </p>
      <p>
        The architecture is designed with a focus on modularity, hardware independence, and deterministic execution. It organizes 
        the system into well-defined layers, each responsible for a specific aspect of functionality, ranging from low-level 
        hardware interaction to high-level control logic.
      </p>
      <p>
        In this chapter, we first provide an overview of the system, followed by a detailed description of its layered design, 
        core components, data flow, and execution model. We also discuss the key design principles that guided the development of 
        the system and compare our approach with existing solutions. This structured view establishes a clear understanding of 
        how the Vayu stack operates as an integrated whole.
      </p>

      <h3>Architecture Components</h3>
      <ul className="components-list">
        <li>Overview</li>
        <li>Layered Architecture</li>
        <li>Component Design</li>
        <li>Data Flow</li>
        <li>Execution Model</li>
        <li>Design Principles</li>
        <li>Comparison with Existing Solutions</li>
        <li>Summary</li>
      </ul>
    </div>
  );
};

export default Architecture;
