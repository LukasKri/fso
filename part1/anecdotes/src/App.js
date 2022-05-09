import { useState } from "react";
import Button from "./Button";
import Template from "./Template";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes([...copy]);
  };

  const countMostVotes = () => {
    const max = Math.max(...votes);
    const index = votes.indexOf(max);
    return index;
  };

  const mostVoted = countMostVotes();

  return (
    <div>
      <Template
        title={"Anecdote of the day"}
        anecdote={anecdotes[selected]}
        votesCount={votes[selected]}
      />
      <Button name="vote" onClick={handleVoteClick} />
      <Button
        name="next anecdote"
        onClick={() => setSelected(getRandomInt(0, 7))}
      />
      <Template
        title={"Anecdote with most votes"}
        anecdote={anecdotes[mostVoted]}
        votesCount={votes[mostVoted]}
      />
    </div>
  );
};

export default App;
