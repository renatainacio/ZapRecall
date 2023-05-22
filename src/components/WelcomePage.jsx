import styled from "styled-components";
import logo from "../assets/logo.png"

export default function WelcomePage(props) {
    return(
        <SCWelcome>
            <img src={logo} alt="zap-recall logo"/>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={() => props.setCurrentPage(1)}>Iniciar Recall!</button>
        </SCWelcome>
    );
}

const SCWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 667px;
    img {
        width: 136px;
        height: 161px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-top: 13px;
        margin-bottom: 30px;
    }
    button {
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`