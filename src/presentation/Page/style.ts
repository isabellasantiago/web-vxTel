import styled, { css } from 'styled-components';

interface Props {
    width: number;
}

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 20px;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const PageContent = styled.article<Props>`
    box-sizing: border-box;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    ${(props) => props.width < 340 && css({
        flexDirection: 'column',
    }) }
`;

export const Content = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    
    @media (min-width: 475px){
        width: 60%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const PContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 225px;
    padding-left: 10px;

    display: flex;
    flex-direction: column;

`;

export const Title = styled.h1`
    font: 800 20px 'Open sans', sans-serif;
    text-transform: uppercase;
    text-align: left;
    margin: 0;

    @media(min-width: 475px) {
        font: 800 26px 'open sans', sans-serif;
        text-transform: uppercase;
    }
`;

export const P = styled.p`
    font: 300 14px 'open sans', sans-serif;
    text-align: left;
    width: 100%;

    @media(min-width: 475px){
        max-width: 60%;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ResultContainer = styled.div`
    width: 100%;
    max-height: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ResultTitle = styled.h3`
    font: 800 28px 'Bayon', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;

    margin: 5px;
`;

export const Result = styled.span`
    box-sizing: border-box;
    font: 500 24px 'Open sans', sans-serif;
    width: 180px;
    height: 40px;
    background-color: #f8f8f8;
    border-radius: 10px;
    text-align: left;

    padding: 0px 15px;
    margin-bottom: 20px;
`;

export const RecalculateBtn = styled.button`
    width: 130px;
    height: 40px;
    margin-top: 20px;

    border: none;
    border-radius: 20px;
    background-color: #01FB01;
    
    color: #000;
    font: 800 14px 'Open sans', sans-serif;
    text-transform: uppercase;

    &:hover{
        filter: brightness(95%);
    }

    cursor: pointer;
`;