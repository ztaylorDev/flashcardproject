import React, {useState, useEffect, Component} from 'react';
import FlashcardList from './FlashcardList';
import './App.css'
import axios from 'axios'

class App extends Component{
  constructor(props){
      super(props) 
      this.handleChange =this.handleChange.bind(this)
      this.state = {
        decks: [
          title
        ]
      }





    



  }
}


















export default App;
// function App() {
  //   const [flashcards, setFlashcards] = useState(sampleCards);
  
  //   useEffect(() => {
    //     axios
    //       .get(http://localhost:9000/api/flashcards])
    //       .then(res =>{
      //         console.log(res.data)
      //       })
      //   })
      
      //   return(
        //     <FlashcardList flashcards={flashcards} />
        //   );
        // }
        
        // const sampleCards = [
        //   {
        //     id: 1,
        //     question: 'What is 2 + 2?',
        //     answer: '4',
            
        //   },
        //   {
        //     id: 2,
        //     question: 'Question 2?',
        //     answer: 'Answer',
        //   }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        // ]