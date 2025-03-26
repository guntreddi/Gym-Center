// src/components/blog/Blog.jsx
import React, { useState } from "react";
import "./Blog.css";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "5 Effective Workout Tips for Beginners",
      date: "March 28, 2025",
      content:
        "Starting your fitness journey? Here are 5 essential tips to keep you motivated and consistent...",
      tags: ["Fitness", "Beginner", "Tips"],
    },
    {
      id: 2,
      title: "The Importance of Nutrition in Fitness",
      date: "March 15, 2025",
      content:
        "Your diet plays a crucial role in your fitness progress. Learn what to eat and when for optimal results...",
      tags: ["Nutrition", "Diet", "Health"],
    },
    {
      id: 3,
      title: "How to Create a Balanced Workout Routine",
      date: "March 5, 2025",
      content:
        "Achieve your fitness goals faster with a well-structured and balanced workout routine...",
      tags: ["Workout", "Routine", "Fitness"],
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="blog-section">
      <h2>Our Latest Blog Articles</h2>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="articles">
        {filteredArticles.map((article) => (
          <motion.div
            key={article.id}
            className="article-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{article.title}</h3>
            <p className="article-date">{article.date}</p>
            <p className="article-content">
              {article.content.slice(0, 50)}... 
            </p>
            <div className="tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <button className="read-more" onClick={() => openModal(article)}>
              Read More
            </button>
          </motion.div>
        ))}
      </div>

      {selectedArticle && (
        <div className="modal">
          <div className="modal-content">
            <AiFillCloseCircle className="close-button" onClick={closeModal} />
            <h3>{selectedArticle.title}</h3>
            <p>{selectedArticle.content}</p>
            <div className="tags">
              {selectedArticle.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
