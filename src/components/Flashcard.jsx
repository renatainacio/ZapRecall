import play from '../assets/seta_play.png';
import flip from '../assets/seta_virar.png';
import styled from 'styled-components';

export default function Flashcard(props) {
    const {index, openCards, setOpenCards, recalled, setRecalled,
        almostRecalled, setAlmostRecalled, notRecalled, setNotRecalled,
        answered, setAnswered, flipped, setFlipped} = props;
    const {question, answer} = props.card;
    let isOpened = openCards.includes(index);
    let isAnswered = answered.includes(index);
    let isFlipped = flipped.includes(index);
    return (
        <SCQuestionContainer>
            <SCQuestionHeader $isOpened={isOpened} $isFlipped={isFlipped}>
                <p>Pergunta {index + 1}</p>
                <button disabled={(isOpened || isFlipped || isAnswered)} onClick={openCard}><img src={play}/></button>
            </SCQuestionHeader>
            <SCQuestion $isOpened={isOpened} $isFlipped={isFlipped}>
                {isOpened ? <p>{question}</p> : isFlipped ? <p>{answer}</p> : ""}
                <img src={flip} onClick={flipCard}/>
                <SCButtons $isFlipped={isFlipped}>
                    <SCButton $color="red" disabled={!isFlipped} onClick={() => answerQuestion("notRecalled")}>Não lembrei</SCButton>
                    <SCButton $color="yellow" disabled={!isFlipped} onClick={() => answerQuestion("almostRecalled")}>Quase não lembrei</SCButton>
                    <SCButton disabled={!isFlipped} onClick={() => answerQuestion("recalled")}>Zap!</SCButton>
                </SCButtons>
            </SCQuestion>
        </SCQuestionContainer>
    )

    
    function answerQuestion(selection) {
        if(selection === "recalled") {
            setRecalled([...recalled, index])
        }
        else if(selection === "almostRecalled") {
            setAlmostRecalled([...almostRecalled, index])
        }
        else if (selection === "notRecalled") {
            setNotRecalled([...notRecalled, index])
        }
        const auxAnswered = [...answered, index];
        setAnswered(auxAnswered);
        const auxFlipped = flipped.filter(card => card != index);
        setFlipped(auxFlipped);
    }


    function openCard() {
        const auxOpen = [...openCards, index];
        setOpenCards(auxOpen);
    }

    function flipCard() {
        const auxFlipped = [...flipped, index];
        setFlipped(auxFlipped);
        const auxOpen = openCards.filter(card => card != index);
        setOpenCards(auxOpen);

    }
}

const SCQuestionContainer = styled.div`
    width: 300px;
    margin-top: 25px;
    `;

const SCQuestionHeader = styled.div`
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => (props.$isOpened || props.$isFlipped) ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    button {
        border: none;
        background-color: #FFFFFF;
    }
`;

const SCQuestion = styled.div`
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 18px 15px;
    position: relative;
    display: ${props => (!props.$isOpened && !props.$isFlipped) ? "none" : "flex"};
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img {
        display: ${props => !props.$isOpened ? "none" : "flex"};
        position: absolute;
        right: 15px;
        bottom: 6px;
        width: 30px;
        height: 20px;
    }
`;

const SCButtons = styled.div`
    display: ${props => !props.$isFlipped ? "none" : "flex"};
    width: 300px;
    position: absolute;
    bottom: 10px;
`

const SCButton = styled.button`
    width: 85px;
    height: 37px;
    margin-right: 8px;
    background: ${props => props.$color === "red" ? "#FF3030" : props.$color === "yellow" ? "#FF922E" : "#2FBE34"};
    border: none;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;    
`;