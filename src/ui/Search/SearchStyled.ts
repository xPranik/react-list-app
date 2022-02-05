import styled from "styled-components";

export const SearchStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBar = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #b2b2b2;
  border-radius: 4px;
  padding: 4px 8px;
  color: #000;
  font-size: 16px;
  margin-right: 16px;
  &::placeholder {
    color: #b2b2b2;
  }
`;
export const Button = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 8px 24px;
  height: 40px;
  border: 1px solid #b2b2b2;
  text-align: center;
  color: #000;
  border-radius: 4px;
  &:hover {
    background-color: #c3f3e2;
  }
`;
