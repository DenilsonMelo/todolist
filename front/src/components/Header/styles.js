import { styled } from "styled-components";

export const Container = styled.header`
    background: var(--blue-primary);
    height: 160px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    display: flex;
`;

export const ContainerContent = styled.div`
    max-width: 1240px;
    width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        color: var(--blue-300);
    }

    button{
        background-color: var(--blue-500);
        color: var(--blue-900);
        font-size: 14px;
        font-weight: 600;
        padding: 12px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
        transition: all 0.3s;

        &:hover{
            padding: 14px;
        }
    }
`;