import party from "../assets/party.png";
import sad from "../assets/sad.png";
import styled from "styled-components";

export default function EndOfGame(props) {
    return (
        <SCMessage>
            <div>
                <img src={props.result === "parabens" ? party : sad} alt="emoji"/>
                <h2>{props.result === "parabens" ? "Parabéns!" : "Putz..."}</h2>
            </div>
            <p>{props.result === "parabens" ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns... Mas não desanime!"}</p>
        </SCMessage>
    )
}

const SCMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        margin-bottom: 14px;
    }
    img {
        width: 23px;
        height: 23px;
        margin-right: 12px;
    }
    h2 {
        height: 22px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    p {
        width: 222px;
        height: 44px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333333;
        margin-bottom: 14px;
    }
`