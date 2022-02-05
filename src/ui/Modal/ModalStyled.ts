import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 8px;
  width: 600px;
  height: auto;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 40px;
  border-bottom: 1px solid #f3f5f3;
  background-color: #b7b7b7;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: red;
  &:hover {
    color: darkred;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  span {
    font-weight: bold;
  }
`;
