import React from 'react'

function Inline() {
    const styles = {
        color : 'red',
        fontsize : '60px'
    }
  return (
    <div>
       <h2 className = {styles}> Inline Stylesheet </h2>
    </div>
  )
}

export default Inline
