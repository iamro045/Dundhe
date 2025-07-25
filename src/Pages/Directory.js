// src/Pages/Directory.js

import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { FaPhone } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton'; // Import the skeleton loader
import 'react-loading-skeleton/dist/skeleton.css'; // Import the default CSS
import './Directory.css';

function Directory() {
  const [directoryData, setDirectoryData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "directory"] | order(category asc) {
          _id,
          category,
          contacts
        }`
      )
      .then((data) => setDirectoryData(data))
      .catch(console.error);
  }, []);

  // This is the new skeleton loading state function
  const renderSkeletons = () => (
    <div className="directory-content">
      {[1, 2].map(n => (
        <div key={n} className="directory-category">
          <h2 className="category-title">
            <Skeleton height={35} width="300px" />
          </h2>
          <div className="contact-list">
            {[1, 2, 3].map(i => (
              <div key={i} className="contact-item">
                <div className="contact-info">
                  <Skeleton height={20} width="200px" />
                  <Skeleton height={15} width="150px" />
                </div>
                <div className="contact-phone">
                  <Skeleton height={40} width="150px" borderRadius="20px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="directory-page-container">
      <div className="page-header">
        <h1>📋 Village Directory</h1>
        <p>Important contacts and services available in our village.</p>
      </div>
      
      {/* Conditionally render skeletons or the real data */}
      {!directoryData ? renderSkeletons() : (
        <div className="directory-content">
          {directoryData.map((section) => (
            <div key={section._id} className="directory-category">
              <h2 className="category-title">
                <span>{section.category}</span>
              </h2>
              <div className="contact-list">
                {section.contacts.map((contact, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-info">
                      <span className="contact-name">{contact.name}</span>
                      <span className="contact-role">{contact.role}</span>
                    </div>
                    <a href={`tel:${contact.phone}`} className="contact-phone">
                      <FaPhone style={{ marginRight: '8px' }} />
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Directory;