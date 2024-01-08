import React from 'react'

export const IconSwitch = ({onSwitch, view}) => {
  return (
    <span className="material-icons" onClick={onSwitch}>
        {view}
    </span>
  )
}
