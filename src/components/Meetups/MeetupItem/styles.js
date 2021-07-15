import styled from "styled-components";

export const Container = styled.li`
  margin: 1rem 0;
`;

export const Image = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

export const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;

  button {
    font: inherit;
    cursor: pointer;
    color: #77002e;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;

    &:hover,
    &:active {
      background-color: #ffe2ed;
    }
  }
`;
