import Timer from 'react-timer'
import React,{ component,prototypes } from 'react'
import React, { useEffect } from 'react'
import React, { useState } from 'react'

class Component {
  /* delay is just the delay on showing the update of the timer */
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
  render () {
    return (
      <div>
        <Timer options={OPTIONS} />
      </div>
    )
  }
}
export default Component