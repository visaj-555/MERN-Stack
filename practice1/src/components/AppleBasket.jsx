import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  var total;
  if (appleCount === 10) 
  {
    total = "full";
  }
  if (appleCount === 0) 
  {
    total = "empty";
  }
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName} ({total})</p>
    </div>
  )
}

export default AppleBasket