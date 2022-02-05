import styled from "styled-components";
import { Row } from "../StudentsList/StudentsListStyled";

export const StudentsItemStyled = styled(Row)`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  margin-right: 16px;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`;
