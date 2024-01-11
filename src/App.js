import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      const advice = res.data.slip.advice;
      setAdvice(advice);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <div className="quote">
        <h2 className="advice">{advice}</h2>
        <button className="btn" onClick={fetchAdvice}>
          <span>Click me</span>
        </button>
      </div>
    </div>
  );
};

export default App;
