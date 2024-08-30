import React from 'react';

const Services = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: 'purple' }}>Services Page</h1>
      <ul style={{ fontSize: '18px', listStyleType: 'none', padding: 0 }}>
        <li>Service 1: Web Development</li>
        <li>Service 2: Graphic Design</li>
        <li>Service 3: Digital Marketing</li>
        <li>Service 4: Cybersecurity</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Services" style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }} />
    </div>
  );
};

export default Services;
