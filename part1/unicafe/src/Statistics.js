import React from "react";
import StatisticLine from "./StatisticLine";

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
      return (good * 100) / all + " %";
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
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={countAvg()} />
          <StatisticLine text="positive" value={countPositive()} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
