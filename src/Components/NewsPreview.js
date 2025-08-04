import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './NewsPreview.css'; // We'll create this CSS file

function NewsPreview() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // Fetch only the 3 most recent posts
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          slug,
          publishedAt,
          "summary": pt::text(body)[0...100]
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const renderSkeletons = () => (
    <div className="news-preview-list">
      {[1,2,3].map(n => <div key={n} className="preview-card-skeleton"><Skeleton count={3} /></div>)}
    </div>
  );

  return (
    <div className="news-preview-container">
      <h2 className="section-title">सूचना / घोषणा</h2>
      <div className="news-preview-list">
        {!posts ? renderSkeletons() : posts.map(post => (
          <div key={post._id} className="preview-card">
            <span className="preview-date">{new Date(post.publishedAt).toLocaleDateString()}</span>
            <h3 className="preview-title">{post.title}</h3>
            <p className="preview-summary">{post.summary}...</p>
            <Link to={`/news/${post.slug.current}`} className="preview-link">
              Read More →
            </Link>
          </div>
        ))}
      </div>
      <div className="view-all-link-container">
        <Link to="/news" className="cta-button">View All News</Link>
      </div>
    </div>
  );
}

export default NewsPreview;