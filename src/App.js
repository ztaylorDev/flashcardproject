import React, {useState} from 'react';
import FlashcardList from './FlashcardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return(
    <FlashcardList flashcards={flashcards} />
  );
}



const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    option: [
      '2',
      '3',
      '4',
      '5',
    ]
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    option: [
      'Answer',
      'Answer',
      'Answer',
      'Answer',
    ]
  }
  
  
















]





export default App;
