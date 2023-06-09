import play from '../assets/seta_play.png';
import ok from '../assets/icone_certo.png';
import almost from '../assets/icone_quase.png';
import notOk from '../assets/icone_erro.png';
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
    let isRecalled = recalled.includes(index);
    let isAlmostRecalled = almostRecalled.includes(index);
    let isNotRecalled = notRecalled.includes(index);

    return (
        <SCQuestionContainer data-test="flashcard">
            {(!isOpened && !isFlipped) ?
                <SCQuestionHeader $isRecalled={isRecalled} $isAnswered={isAnswered} $isAlmostRecalled={isAlmostRecalled} $isNotRecalled={isNotRecalled}>
                    <p data-test="flashcard-text">Pergunta {index + 1}</p>
                    <button data-test={isRecalled ? "zap-icon" : isAlmostRecalled ? "partial-icon" : isNotRecalled ? "no-icon" : "play-btn"} disabled={(isOpened || isFlipped || isAnswered)} onClick={openCard}><img src={isRecalled ? ok : isAlmostRecalled ? almost : isNotRecalled ? notOk : play}/></button>
                </SCQuestionHeader>
             : ""}
            {(isOpened || isFlipped) ? 
                <SCQuestion $isOpened={isOpened} $isFlipped={isFlipped}>
                    {isOpened ? <p data-test="flashcard-text">{question}</p> : isFlipped ? <p data-test="flashcard-text">{answer}</p> : ""}
                    {isOpened ? <img src={flip} onClick={flipCard} data-test="turn-btn"/> : ""}
                    {isFlipped ?                 
                    <SCButtons>
                        <SCButton $color="red" onClick={() => answerQuestion("notRecalled")} data-test="no-btn">Não lembrei</SCButton>
                        <SCButton $color="yellow" onClick={() => answerQuestion("almostRecalled")} data-test="partial-btn">Quase não lembrei</SCButton>
                        <SCButton $color="green" onClick={() => answerQuestion("recalled")} data-test="zap-btn">Zap!</SCButton>
                    </SCButtons>
                : ""}
                </SCQuestion>
             : ""}
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => (props.$isRecalled ? "#2FBE34" : props.$isAlmostRecalled ? "#FF922E" : props.$isNotRecalled ? "#FF3030" : "#333333")};
        text-decoration: ${props => (props.$isAnswered ? "line-through" : "none")}
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
    padding: 10px 15px;
    position: relative;
    display: flex;
    p {
        height: 53px
        padding: 5px 0px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img {
        display: flex;
        position: absolute;
        right: 15px;
        bottom: 6px;
        width: 30px;
        height: 20px;
    }
`;

const SCButtons = styled.div`
    display: flex;
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