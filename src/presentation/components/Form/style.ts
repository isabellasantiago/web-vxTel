import styled from 'styled-components';

export const FormStyled = styled.form`
    align-self: flex-start;
    justify-self: flex-start;

    width: 250px;
    height: 350px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
`;

export const SubmitButton = styled.input.attrs({ type: 'submit'})`
    width: 120px;
    height: 50px;
    margin-top: 20px;

    border: none;
    border-radius: 20px;
    background-color: #01FB01;
    
    color: #000;
    font: 800 16px 'Open sans', sans-serif;
    letter-spacing: 0.5px;

    &:hover{
        filter: brightness(95%);
    }

    cursor: pointer;
`;