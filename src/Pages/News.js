// src/Pages/News.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import Skeleton from 'react-loading-skeleton'; // Import the skeleton loader
import 'react-loading-skeleton/dist/skeleton.css'; // Import the default CSS
import './News.css';

function News() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          "summary": pt::text(body)[0...150] // Create a short summary from the body
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  // This is the new skeleton loading state
  const renderSkeletons = () => {
    return [1, 2, 3].map(n => (
      <div key={n} className="news-list-item skeleton">
        <div className="news-item-image">
          <Skeleton height={150} />
        </div>
        <div className="news-item-content">
          <Skeleton height={20} width="150px" style={{ marginBottom: '1rem' }}/>
          <Skeleton height={30} style={{ marginBottom: '0.5rem' }}/>
          <Skeleton count={3} />
        </div>
      </div>
    ));
  };

  return (
    <div className="news-page-container">
      <div className="page-header">
        <h1>📰 News & Announcements</h1>
        <p>The latest updates from our village.</p>
      </div>
      <div className="news-list-full">
        {!posts ? renderSkeletons() : posts.map((post) => (
          <Link to={`/news/${post.slug.current}`} key={post._id} className="news-item-link">
            <div className="news-list-item">
              <div className="news-item-image">
                {post.mainImage ? (
                  <img src={post.mainImage.asset.url} alt={post.title} />
                ) : (
                  <div className="image-placeholder"></div>
                )}
              </div>
              <div className="news-item-content">
                <span className="news-item-date">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <h2 className="news-item-title">{post.title}</h2>
                <p className="news-item-summary">{post.summary}...</p>
                <span className="read-more-link">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;