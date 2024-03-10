import React from 'react';

const NewsContainer = ({ Title, Description, ImageUrl, NewsUrl }) => {
    return (
        <div>
            <div className="card" style={{ 
                width: "20rem",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 6px rgba(0,0,0,1)",
                transform: "scale(1)"
            }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                <img src={!ImageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/14937/production/_129897248_gettyimages-1258251285.jpg" : ImageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <a href={NewsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default NewsContainer;
