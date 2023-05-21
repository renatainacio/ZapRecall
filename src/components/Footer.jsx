import styled from "styled-components";

export default function Footer(props) {
    const {answered, cards} = props;
    return(
        <SCFooter data-test="footer">
            <p>{answered.length}/{cards.length} CONCLUÍDOS</p>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        height: 22px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`