import styled from "styled-components";

export const StudentsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 16px;
  border-radius: 4px;
  height: 80vh;
  position: relative;
`;

export const Row = styled.div<{ header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  &:not(:first-child) {
    border-top: 1px solid #f3f4f6;
  }
  background-color: ${({ header }) => header && "#f3f4f6"};
  border-radius: ${({ header }) => header && "4px 4px 0 0"};
`;

export const Col = styled.div`
  font-size: 14px;
  color: #000;
  width: 33%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Error = styled.div`
  color: #b2b2b2;
  font-size: 18px;
  text-align: center;
  width: 100%;
  padding: 16px;
`;
