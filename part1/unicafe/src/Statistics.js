import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  const countAvg = () => {
    if (!!all) {
      return (good * 1 + neutral * 0 + bad * -1) / all;
    }
    return 0;
  };

  const countPositive = () => {
    if (!!all) {
      return (good * 100) / all;
    }
    return 0;
  };

  const isAnyFeedbackGiven = () => {
    if (!!good || !!neutral || !!bad) return true;
    return false;
  };

  return (
    <div>
      <h1>statistics</h1>
      {isAnyFeedbackGiven() ? (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {countAvg()}</p>
          <p>positive {countPositive()} %</p>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
