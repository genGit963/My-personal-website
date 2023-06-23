import React from "react"
import "../pages/what.css"

const WhatAmI = () => {

  const diff = new Date().getFullYear() - 2018

  return (
    <div className="what-body">
      <div className="what-par">
        <p className="p-what">
          <h4 className="h4-what"> Introducing..... </h4>
          I have been looking on computer screen and understanding computer physics
          <br /> for more than {diff} years. <br /> <br />
          &nbsp;  &nbsp; &nbsp;Today I am <br /> <span className="span-what">
            &nbsp; &nbsp; &nbsp;  SOFTWARE ENGINEER </span>
          can do <span className="span-what"> AI </span> behind.

        </p>

        <h4 className="h4-what"> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; I am being called by <span className="span-what"> Mr. Bogati. </span></h4>
      </div>
    </div>
  )
}

export default WhatAmI;