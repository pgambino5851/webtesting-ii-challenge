import React from 'react'

 function Display(props) {

  const { strikes, balls, fouls } = props

  return (
    <div>
      <div data-testid="balls">{`Balls: ${balls}`}</div>
      <div data-testid="strikes">{`Strikes: ${strikes}`}</div>
      <div data-testid="fouls">{`Fouls: ${fouls}`}</div>
    </div >
  )
}

export default Display