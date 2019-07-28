//import react and react component from react
import React,{ Component} from 'react';
import Card from './Card'
import planes from '../planes';
import Header from './Header'
import css from '../index'
import Jumbotron from './Jumbotron'


// create a function that that render the list of cards with images using map function in react
class Cardlist extends Component{
     state = {
          instruction: 'Click any Plane to get started',
          planes:planes,
          score:0,
          topScore :0,
          PlaneAlreadyClicked : [],
     }
    
     handlePlaneClick = (event)=>{
           event.preventDefault()
          // Get the name of the plane 
           const itemClicked = event.target.alt; 
         //Sort the Planes
     const sortedPlanes = planes.sort(function(){ return Math.random()-0.5}) 
     // Check if the plane is already click

      let isPlaneAlreadyClicked = this.state.PlaneAlreadyClicked.includes(itemClicked)
      console.log(isPlaneAlreadyClicked)
   if(!isPlaneAlreadyClicked) {
     const updatedTopScore = this.state.score >= this.state.topScore
          ? this.state.score + 1
          : this.state.topScore; 

     this.setState({
          PlaneAlreadyClicked: [...this.state.PlaneAlreadyClicked, itemClicked],
          instruction: 'Winner Winner, Chicken Dinner',     
          planes:sortedPlanes,
          score:this.state.score + 1,
          topScore: updatedTopScore,    
     })
    console.log(this.state.score, this.state.updatedScore)
   } else{
          this.setState({
               PlaneAlreadyClicked:[],
               instruction:  'Thats not the right plane!!',     
               planes:sortedPlanes,
               score:0,     
          }) 
          console.log(this.state.PlaneAlreadyClicked)
     }

     if(this.state.score === this.state.updatedScore){
          console.log(this.state.updatedScore)
       this.setState({topScore:this.state.updatedScore+1})
     }
}
     render(){
          return (
              <div>
                    <Header  instruction = {this.state.instruction} score = {this.state.score}  topScore = {this.state.topScore}/>
                   <Jumbotron />
               {     
                    this.state.planes.map((plane, i)=>(
                         
                        <Card 
                        name = {plane.name } 
                        id = {plane.id}
                        handlePlaneClick ={this.handlePlaneClick} 
                        key = {i}/> 
                    )) 
               }
         
             </div>
          )}}

          export default Cardlist