import React, { FC, RefObject, useEffect, useState } from "react";
import { StudentsItem } from "../StudentsItem";
import { Student } from "../../redux/types/students";
import {
  StudentsListStyled,
  Col,
  Row,
  Error,
  Content,
} from "./StudentsListStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Modal } from "../Modal";
import { Loader } from "../Loader";

interface StudentsListProps {
  wrapperRef: RefObject<HTMLDivElement>;
}

export const StudentsList: FC<StudentsListProps> = ({ wrapperRef }) => {
  const { students, isLoading, error } = useSelector(
    (state: RootState) => state.Students
  );
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>();
  const [selectedId, setSelectedId] = useState<string | null>("");

  useEffect(() => {
    setSelectedStudent(
      students.find((item: Student) => item.id === selectedId)
    );
    setOpen(!!selectedStudent);
  }, [students, selectedId, selectedStudent]);

  return (
    <StudentsListStyled>
      {isOpen && (
        <Modal
          name={selectedStudent?.name}
          marks={selectedStudent?.marks}
          closeModal={() => setSelectedId(null)}
        />
      )}
      <Row header={true}>
        <Col>Name</Col>
        <Col>Attendance</Col>
        <Col>Total</Col>
      </Row>
      <Content ref={wrapperRef}>
        {students.length > 0 &&
          students.map((student: Student, index: number) => (
            <StudentsItem
              key={student.name + "_" + index}
              student={student}
              openModal={setSelectedId}
            />
          ))}
        {students.length === 0 && !isLoading && (
          <Row>
            <Error>{error ? error : "Nothing found!"}</Error>
          </Row>
        )}
      </Content>
      {isLoading && <Loader />}
    </StudentsListStyled>
  );
};
