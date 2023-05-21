import logo from '../assets/logo.png'
import styled from 'styled-components'

export default function Header() {
    return (
        <SCHeader>
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </SCHeader>
    )
}

const SCHeader = styled.header`
    position:fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    border: 1px solid rgb(219, 219, 219);
    border-bottom: none;
    height: 142px;
    width: 100%;
    img {
        width: 52px;
        height: 60px;
    }
    h1 {
        width: 203px;
        height: 44px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
`