import { useState } from 'react';
import styled from "styled-components";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Header from "./Header";

const [openCards, setOpenCards] = useState([]);
const [recalled, setRecalled] = useState([]);
const [almostRecalled, setAlmostRecalled] = useState([]);
const [notRecalled, setNotRecalled] = useState([]);
const [answered, setAnswered] = useState([]);

export default function FlashcardPage(props) {
    return (
        <>
            <Header/>
            <SCFlashcards>
                {props.cards.map((card, indice) => 
                    <Flashcard
                        key={indice}
                        card={card}
                        indice={indice}
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
                        />
                )}
            </SCFlashcards>
            <Footer/>
        </>
    )
}

const SCFlashcards = styled.div`
    margin-top: 142px;
`