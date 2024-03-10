import React, { useState, useEffect } from "react";
import NewsContainer from "./NewsContainer";
import axios from "axios";

const NewsMain = () => {
  // Set a default query (e.g., top headlines for a specific country)
  const [defaultQuery, setDefaultQuery] = useState("in"); // Replace with your desired default query

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const apiKey = "827d995de2164005bee10a728d2cf843"; // Replace with your actual News API key

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let url;
        if (query) { // Use query if available
          url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
          console.log('query taken')
        } else { // Use default query for initial render
          url = `https://newsapi.org/v2/top-headlines?country=${defaultQuery}&apiKey=${apiKey}`;
        }

        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    };

    fetchData();
  }, [query]); // Re-run useEffect only on query changes

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value

    if (searchTerm.length === 0) {
      alert("Please enter a search term.");
      return; // Exit the function if search term is empty
    }

    setQuery(searchTerm); // Update query state to trigger re-render
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handlePrev = async () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container">
      <h2>Daily dose- Main Headlines</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onKeyPress={handleKeyPress}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="row my-3">
        {articles.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsContainer
                Title={element.title ? element.title.slice(0, 45) : ""}
                Description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                ImageUrl={element.urlToImage}
                NewsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-primary btn-lg"
          onClick={handlePrev}
        >
          &larr;Previous
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default NewsMain;
