import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

const Blog = () => {
  return (
    <div className="elevate__blog section__padding" id="blog">
      <div className="elevate__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="elevate__blog-container">
        <div className="elevate__blog-container_groupA">
          <Article
            src={blog01}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            createdAt={"Jul 08, 2023"}
          />
        </div>
        <div className="elevate__blog-container_groupB">
          <Article
            src={blog02}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            createdAt={"Jul 08, 2023"}
          />
          <Article
            src={blog03}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            createdAt={"Jul 08, 2023"}
          />
          <Article
            src={blog04}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            createdAt={"Jul 08, 2023"}
          />
          <Article
            src={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            createdAt={"Jul 08, 2023"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
