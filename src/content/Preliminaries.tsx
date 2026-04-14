import React from 'react';

const Preliminaries: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>Preliminaries</h1>
      
      <p>
        This chapter provides an overview of the fundamental concepts and system components required to understand the subsequent 
        technical details of the proposed system.
      </p>
      <p>
        The reader is assumed to have a basic familiarity with the domain, as it is not feasible to cover all topics in depth 
        within this chapter. Instead, we present concise discussions of key concepts to establish the necessary background and 
        ensure clarity in later sections.
      </p>

      <h3>This chapter is organized into nine sections, which can be broadly categorized into five functional layers:</h3>
      <ol>
        <li><strong>Foundation Layer</strong>: Sections 1–3 (Embedded Systems, Hardware Abstraction, RTOS)</li>
        <li><strong>Perception Layer</strong>: Sections 4–5 (Coordinate Frames, Sensors)</li>
        <li><strong>Control and Actuation</strong>: Sections 6–7 (Control Theory, Actuators)</li>
        <li><strong>Communication Layer</strong>: Section 8 (Communication Interfaces)</li>
        <li><strong>Safety and Failsafe Mechanisms</strong>: Section 9 (Safety Procedures)</li>
      </ol>
    </div>
  );
};

export default Preliminaries;
