import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';
import './NewsDetail.css';

function NewsDetail() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          "authorName": author->name,
          mainImage{
            asset->{
              _id,
              url
             }
          },
          body
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return <div className="page-header"><h1>Loading Article...</h1></div>;
  }

  return (
    <div className="news-detail-container">
      <div className="article-header">
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>By {post.authorName}</span> | <span>Published on {new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
      {post.mainImage && (
        <img src={post.mainImage.asset.url} alt={post.title} className="article-main-image" />
      )}
      <div className="article-content">
        <PortableText value={post.body} />
      </div>
      <Link to="/news" className="back-link">← Back to All News</Link>
    </div>
  );
}

export default NewsDetail;