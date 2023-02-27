import styled from 'styled-components';

export const Header = styled.header`
    > * {
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }

    width: 100%;
    max-width: 1400px;
    height: 70px;
    border-bottom: 1px solid #EEF3F8;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


export const LogoContainer = styled.div`
    width: 150px;
    height: 50px;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;


export const Logo = styled.span`
    font: 400 30px 'Bayon', sans-serif;
    text-align: left;
    z-index: 1;
`;

export const Circle = styled.div`
    position: absolute;
    width: 5px;
    height: 30px;

    border-radius: 50%;
    background-color: #01FB01;
    left: 0;
`
