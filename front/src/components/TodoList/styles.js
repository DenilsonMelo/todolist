
import styled from "styled-components";

export const ButtonIcon = styled.button`
    border: 0;
    width: 24px;
    height: 24px;
    border-radius: 8px;
`;

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: var(--blue-950);
      font-weight: 500;
      text-align: left;
      padding: 0.5rem 0;
    }

    td {
      padding: 1.5rem 0;
      background: var(--blue-50);
      border: 0;

      &:first-child {
        border-radius: 8px 0 0 8px;
        padding: 1.5rem 1rem;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
        padding-right: 12px;
      }

      button {
        background: transparent;
        box-shadow: none;
        padding: 0;
      }
    }
  }

  @media screen and (max-width: 991px) {
    table {
      thead {
        display: none;
      }

      tr {
        border: 1px solid var(--blue-200);
        display: block;
        margin-bottom: 1rem;
      }

      td {
        border-bottom: 1px solid var(--blue-100);
        display: block;
        font-size: 0.8em;
        text-align: right;
        border-radius: 0 !important;
        padding: 1rem !important;
      }

      td::before {
        content: attr(data-label);
        float: left;
        font-weight: 700;
        padding-right: 1rem;
      }
    }
  }

  .cashOutflow {
    color: var(--red);
    font-weight: 700;
  }

  .cashIncome {
    color: var(--green);
    font-weight: 700;
  }
`;
