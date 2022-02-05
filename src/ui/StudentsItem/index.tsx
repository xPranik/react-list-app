import React, { FC } from "react";
import { Student } from "../../redux/types/students";
import { StudentsItemStyled, Avatar } from "./StudentsItemStyled";
import { Col } from "./../StudentsList/StudentsListStyled";

interface StudentsItemProps {
  student: Student;
  openModal: (value: string) => void;
}

export const StudentsItem: FC<StudentsItemProps> = (props) => {
  const { student, openModal } = props;

  return (
    <StudentsItemStyled onClick={() => openModal(student.id)}>
      <Col>
        <Avatar>
          <img src={student.avatarURL} alt="avatar" />
        </Avatar>
        {student.name}
      </Col>
      <Col>{student.lecturesAttended}</Col>
      <Col>{student.totalLectures}</Col>
    </StudentsItemStyled>
  );
};
