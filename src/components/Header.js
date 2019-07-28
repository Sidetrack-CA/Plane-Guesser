import React from 'react'


const Header = (props)=>{
     return(
          <div  className = "row bg-dark-blue header sticky-top">

            <span className = "col-3 text-white h3 clicky pl-4" >Clicky Plane Guesser</span> 
            <span className = "col-5 text-white h3">{props.instruction}</span>
            <span className ="col-2 text-white h3 score"> Score: {props.score}  </span>
         
            <span className = "col-2 text-white h3 score">Top Score:{props.topScore}</span>
          </div>
     )
}

export default Header