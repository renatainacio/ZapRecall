import play from '../assets/seta_play.png';
import flip from '../assets/seta_virar.png';
import styled from 'styled-components';

export default function Flashcard(props) {
    const {indice, openCards, setOpenCards, recalled, setRecalled, almostRecalled, setAlmostRecalled,
    notRecalled, setNotRecalled, answered, setAnswered} = props;
    const {question, answer} = props.card;
    const isOpened = openCards.includes(indice);
    const isAnswered = answered.includes(indice);
    return (
        <SCQuestionContainer>
            <SCQuestionHeader isOpened={isOpened}>
                <p>Pergunta {indice + 1}</p>
                <img src={play}/>
            </SCQuestionHeader>
            <SCQuestion isOpened={isOpened}>
                <p>{question}</p>
                <img src={flip}/>
                <SCButtons>
                    <SCButton $color="red">Não lembrei</SCButton>
                    <SCButton $color="yellow">Quase não lembrei</SCButton>
                    <SCButton>Zap!</SCButton>
                </SCButtons>
            </SCQuestion>
        </SCQuestionContainer>
    )
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
        color: #333333;
    }
`;

const SCQuestion = styled.div`
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 18px 15px;
    position: relative;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img {
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