import React from 'react'

const Filter = ({searchInput, handleSearchInput}) => {
  return (
    <div>filter shown with
    <input value={searchInput} onChange={handleSearchInput} /></div>
  )
}

export default Filter