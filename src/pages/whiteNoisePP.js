import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from '../components/NavBar';


import '../App.css';


const WhiteNoisePP = () => {

  

  return (
    <div style={{ background: '#DEDEDE', minHeight: '100vh', color: 'white' }}>
      <NavBar />
     

      <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', backgroundColor: '#FAFAFA', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      
      <h1 style={{ fontSize: '2.5rem', color: '#333', textAlign: 'center', marginBottom: '2px' }}>White Noise</h1>
      <h1 style={{ fontSize: '2rem', color: '#333', textAlign: 'center', marginBottom: '10px' }}>Privacy Policy</h1>
      
      <p style={{ textAlign: 'center', color: 'black', fontStyle: 'italic',  marginBottom: '30px' }}>Effective Date: 30/08/2024</p>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>1. Introduction</h2>
        <p style={{ color: 'black'}}>White Noise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our mobile application ("App"). By using the App, you agree to the collection and use of information in accordance with this policy.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>2. Information We Collect</h2>
        <p style={{ color: 'black'}}>We do not collect any personal information from users of this App. The App is designed to provide white noise for relaxation and sleep, and it operates without requiring access to your personal data.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>3. Usage Data</h2>
        <p style={{ color: 'black'}}>While using the App, we may collect limited non-personal information about your device, such as:</p>
        <ul style={{ color: 'black', margin: '10px 0', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>Device type (e.g., Android or iOS)</li>
          <li>Operating system version</li>
          <li>App usage patterns (e.g., duration of white noise playback)</li>
        </ul>
        <p style={{ color: 'black'}}>This information is collected to improve the App's performance and user experience. It is anonymous and cannot be used to identify you.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>4. Third-Party Services</h2>
        <p style={{ color: 'black'}}>The App does not use third-party services that may collect information used to identify you. We do not share, sell, or rent any information to third parties.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>5. Data Security</h2>
        <p style={{ color: 'black'}}>We prioritize the security of your information. Although we do not collect personal data, we implement appropriate technical and organizational measures to ensure the App operates securely and protect any usage data we collect.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>6. Children's Privacy</h2>
        <p style={{ color: 'black'}}>The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>7. Changes to This Privacy Policy</h2>
        <p style={{ color: 'black'}}>We may update our Privacy Policy from time to time. Any changes will be posted within the App. You are advised to review this Privacy Policy periodically for any updates. Changes are effective when they are posted in the App.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#0056b3', marginTop: 0 }}>8. Contact Us</h2>
        <p style={{ color: 'black'}}>If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
          <a href="mailto:cbertcreations@gmail.com" style={{ color: '#0056b3', textDecoration: 'none' }}>cbertcreations@gmail.com</a>
        </p>
      </section>
    </div>
    </div>





  )


};

export default WhiteNoisePP;