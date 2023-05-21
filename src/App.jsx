import FlashcardPage from './components/FlashcardPage'
import cardsData from './data'
import styled from 'styled-components'

function App() {
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
