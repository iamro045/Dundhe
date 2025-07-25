import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Gallery.css';

// Define categories for our filter buttons
const categories = [
  { title: 'All', value: 'all' },
  { title: 'Festivals', value: 'festivals' },
  { title: 'Nature', value: 'nature' },
  { title: 'Village Life', value: 'village-life' },
  { title: 'Events', value: 'events' },
];

function Gallery() {
  const [images, setImages] = useState(null);
  const [filter, setFilter] = useState('all'); // State to track the active filter

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "galleryImage"]{
          _id,
          caption,
          category,
          image{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const renderSkeletons = () => (
    <div className="gallery-grid-full">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="gallery-item-skeleton">
          <Skeleton height="100%" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="gallery-page-container">
      <div className="page-header">
        <h1>📷 Photo Gallery</h1>
        <p>A glimpse into the life and beauty of our village.</p>
      </div>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button 
            key={cat.value} 
            className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {!images ? renderSkeletons() : (
        <div className="gallery-grid-full">
          {filteredImages.map(image => (
            <div key={image._id} className="gallery-item">
              <img src={image.image.asset.url} alt={image.caption} />
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;