import React, { FC } from "react";
import { Marks } from "../../redux/types/students";
import {
  ModalStyled,
  ModalHeader,
  ModalBody,
  Name,
  CloseBtn,
  Text,
  Title,
  ModalWrapper,
  ModalOverlay,
} from "./ModalStyled";

interface ModalProps {
  name?: string;
  marks?: Marks;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ name, marks, closeModal }) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={closeModal} />
      <ModalStyled>
        <ModalHeader>
          <Name>{name}</Name>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </ModalHeader>
        <ModalBody>
          {marks && (
            <>
              <Title>{marks.code.subjectTitle}</Title>
              <Text>
                Total marks: <span>{marks.code.totalMarks}</span>
              </Text>
              <Text>
                Marks obtained: <span>{marks.code.marksObtained}</span>
              </Text>
            </>
          )}
        </ModalBody>
      </ModalStyled>
    </ModalWrapper>
  );
};
