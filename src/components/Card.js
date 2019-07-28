import React from 'react'
import tachyon from "tachyons"
const Card = (props)=>{
     console.log(props.src);
return (
     <div className="card m-3 bg-light-yellow dib br3 pa3 ma2 grow bw3 shadow-5" style={{ width: '18rem' }}>
    <img  className="card-img-top" alt = {props.name} src = {`https://thinksmartinc.com/images/planepics/${props.id}.png`} onClick = {props.handlePlaneClick} />
     </div>
)
}
export default Card