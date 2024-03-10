import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsContainer from "./NewsContainer";

const Politics = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://localhost:3000/politics`;
      try {
        let response = await axios.get(url);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Daily dose- Ipl Headlines</h2>
      <div className="row my-3">
        {articles?.map((element) => {
          return (
            <div className="col-md-4 my-3" key={element.webUrl}>
              <NewsContainer
                Description={
                  element.description ? element.description : ""
                }
                ImageUrl={element.imageUrl}
                NewsUrl={element.webUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Politics;
