import styled from "styled-components";
import ok from "../assets/icone_certo.png";
import almost from "../assets/icone_quase.png";
import notOk from "../assets/icone_erro.png";
import EndOfGame from "./EndOfGame";

export default function Footer(props) {
    const {answered, cards, recalled, almostRecalled} = props;
    const ended = answered.length === cards.length;
    return(
        <SCFooter data-test="footer" $ended={ended}>
            {ended && (recalled.length + almostRecalled.length === cards.length) ? 
            <EndOfGame result={"parabens"}/> : ended ? <EndOfGame result={"putz"}/> : ""}
            <p>{answered.length}/{cards.length} CONCLUÍDOS</p>
            <SCAnswerIcons>
                {answered.map((card, index) => 
                    <img key={index} src={recalled.includes(card) ? ok : almostRecalled.includes(card) ? almost : notOk}
                    data-test={recalled.includes(card) ? "zap-icon" : almostRecalled.includes(card) ? "partial-icon" : "no-icon"}/>
                )}
            </SCAnswerIcons>
        </SCFooter>
    )
}

const SCAnswerIcons = styled.div`
    display: flex;
    margin-top: 6px;
    img {
        margin-right: 5px;
        width: 23px;
        height: 23px;
    }
`

const SCFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${props => (props.$ended ? "171px" : "70px")};
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`