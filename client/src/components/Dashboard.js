import React from "react";

 function Dashboard(props) {

    const { ballHandler, strikeHandler, foulHandler, hitHandler} = props

  return (
    <>
      <button 
      data-testid="ballBtn" 
      onClick={() => ballHandler()}
      >
        Balls
      </button>
      <button 
      data-testid="strikeBtn" 
      onClick={() => strikeHandler()}
      >
        Strikes
      </button>
      <button 
      data-testid="foulBtn" 
      onClick={() => foulHandler()}
      >
        Fouls
      </button>
      <button 
      data-testid="hitBtn" 
      onClick={() => hitHandler()}
      >
        Hits
      </button>
    </>
  );
}

export default Dashboard