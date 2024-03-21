import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    span{
        padding: 12px 0 4px;
    }

    input, textarea, select{
        background-color: var(--blue-100);
        border-radius: 4px;
        outline: none;
        border: 0;
        font-size: 14px;
        padding: 8px 12px;
    }

    textarea{
        resize: none;
        font-family: "Sora", sans-serif;
    }

    button{
        margin-top: 16px;
        padding: 8px;
        background-color: var(--blue-primary);
        border-radius: 4px;
        border: 0; 
        outline: none;
        font-size: 16px;
        font-weight: 600;
    }
`;