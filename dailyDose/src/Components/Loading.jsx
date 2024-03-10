import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
const Loading = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 45);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`position-fixed top-0 left-0 w-100 h-100 bg-dark text-light d-flex justify-content-center align-items-center ${visible ? 'visible' : 'invisible'}`} style={{ zIndex: 50 }}>
      <ProgressBar now={progress} variant="danger" className="w-25" />
    </div>
  );
};

export default Loading;
