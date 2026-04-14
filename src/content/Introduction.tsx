import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="dynamic-card glass">
      <h1>Introduction</h1>
      <p>
        The <em>Vayu</em> project aims to achieve vertical integration across all layers of a flight control system, 
        ranging from physical hardware to high-level control algorithms. This report presents a comprehensive discussion 
        of the system and its components. Before delving into the technical details, it is essential to understand the 
        motivation behind developing such a system, particularly in the context of India.
      </p>
      <p>
        Despite having a strong research ecosystem and producing a large number of engineering graduates each year, India 
        has yet to develop a widely adopted, publicly accessible indigenous drone flight stack. This gap represents both 
        a challenge and an opportunity. While open-source platforms such as PX4 and ArduPilot are widely used, they are 
        not specifically tailored to the requirements of the Indian ecosystem and are not developed indigenously.
      </p>
      <p>
        In practical scenarios, drone manufacturing companies often rely on these external platforms, either directly or 
        through internally modified derivatives. This dependence necessitates maintaining dedicated technical teams to 
        implement and sustain customer-specific modifications. Although open-source platforms provide flexibility and rapid 
        development, they often lack centralized accountability and long-term support guarantees. This creates challenges in 
        ensuring reliability, maintainability, and scalability for commercial and mission-critical deployments.
      </p>
      <p>
        We argue that there is a strong need for an indigenous solution that provides structured development, long-term 
        support, and clear accountability from the firmware provider. Such a system would allow manufacturers to rely on a 
        stable and evolving platform, without bearing the burden of managing low-level embedded complexities. This requirement 
        becomes even more critical in sensitive domains such as defense, where reliance on foreign technology stacks is undesirable.
      </p>
      <p>
        Another significant limitation of existing systems is hardware lock-in. For emerging companies, developing new hardware 
        alongside a compatible firmware stack is a complex and resource-intensive process. This barrier can hinder innovation 
        and slow down development cycles.
      </p>
      <p>
        The Vayu flight control stack addresses these challenges by taking ownership of the embedded system layers, allowing 
        manufacturers to focus on application-driven innovation. By abstracting hardware dependencies and providing a cohesive, 
        maintainable base layer, Vayu aims to simplify development while improving efficiency, flexibility, and reliability.
      </p>
      <p>
        We envision a future driven by truly autonomous systems capable of human-independent decision-making. Achieving this 
        vision requires control over the foundational layers of the technology stack. Therefore, a unified and well-managed base layer, 
        developed and maintained by a dedicated entity, is essential for advancing autonomy in drone systems.
      </p>
      <p>
        While this vision will take time to fully materialize, the current work focuses on establishing a robust base layer. 
        The system we aim to build is designed to remain independent of specific microcontrollers, libraries, or frameworks, 
        ensuring flexibility across both hardware and software domains.
      </p>
    </div>
  );
};

export default Introduction;
