import React from "react";
import "./article.css";
const Article = ({ src, title, createdAt }) => {
  return (
    <div className="elevate__article">
      <div className="elevate__article-image">
        <img src={src} alt="blog" />
      </div>

      <div className="elevate__article-content">
        <div>
          <p>{createdAt}</p>
          <h1>{title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
