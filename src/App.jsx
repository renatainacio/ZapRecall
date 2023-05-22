import FlashcardPage from './components/FlashcardPage'
import WelcomePage from './components/WelcomePage';
import cardsData from './data'
import styled from 'styled-components'
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  if(currentPage === 0)
  {
    return (
      <SCApp>
        <WelcomePage setCurrentPage={setCurrentPage}/>
      </SCApp>
    ) 
  }
  return (
    <SCApp>
      <FlashcardPage cards={cardsData}/>
    </SCApp>
  )
}

export default App

const SCApp = styled.div`
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`
