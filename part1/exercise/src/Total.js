import React from 'react'

const Total = ({course: {parts}}) => {
  let total = 0;
  parts.forEach(({exercises}) => {
    total += exercises 
  });
  
  return (
    <p>Number of exercises {total}</p>
  )
}

export default Total