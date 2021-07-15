import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem;
`;

export const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;

export const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #a50e48;
      border-color: #a50e48;
    }
  }
`;
