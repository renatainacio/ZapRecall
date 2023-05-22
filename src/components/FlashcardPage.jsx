import { useState } from 'react';
import styled from "styled-components";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Header from "./Header";


export default function FlashcardPage(props) {
    const [openCards, setOpenCards] = useState([]);
    const [recalled, setRecalled] = useState([]);
    const [almostRecalled, setAlmostRecalled] = useState([]);
    const [notRecalled, setNotRecalled] = useState([]);
    const [answered, setAnswered] = useState([]);
    const [flipped, setFlipped] = useState([]);
    return (
        <>
            <Header/>
            <SCFlashcards>
                {props.cards.map((card, index) => 
                    <Flashcard
                        key={index}
                        card={card}
                        index={index}
                        openCards={openCards}
                        setOpenCards={setOpenCards}
                        recalled={recalled}
                        setRecalled={setRecalled}
                        almostRecalled={almostRecalled}
                        setAlmostRecalled={setAlmostRecalled}
                        notRecalled={notRecalled}
                        setNotRecalled={setNotRecalled}
                        answered={answered}
                        setAnswered={setAnswered}
                        flipped={flipped}
                        setFlipped={setFlipped}
                        />
                )}
            </SCFlashcards>
            <Footer
             cards={props.cards}
             answered={answered}
             recalled={recalled}
             almostRecalled={almostRecalled}
             notRecalled={notRecalled}
             />
        </>
    )
}

const SCFlashcards = styled.div`
    margin-top: 142px;
    margin-bottom: 95px;
`