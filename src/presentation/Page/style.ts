import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 20px;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const PageContent = styled.article`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Content = styled.div`
    box-sizing: border-box;
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
`;

export const PContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    gap: 15px;

`;

export const Title = styled.h1`
    font: 800 26px 'open sans', sans-serif;
    text-transform: uppercase;
`;

export const P = styled.p`
    font: 300 16px 'open sans', sans-serif;
    max-width: 60%;
`;