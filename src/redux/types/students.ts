const FETCH_STUDENTS = "FETCH_STUDENTS";
const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
const FETCH_STUDENTS_ERROR = "FETCH_STUDENTS_ERROR";
const SEARCH_STUDENTS = "SEARCH_STUDENTS";
const SEARCH_STUDENTS_SUCCESS = "SEARCH_STUDENTS_SUCCESS";
const SEARCH_STUDENTS_ERROR = "SEARCH_STUDENTS_ERROR";

export const Students = {
  FETCH_STUDENTS,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_ERROR,
  SEARCH_STUDENTS,
  SEARCH_STUDENTS_SUCCESS,
  SEARCH_STUDENTS_ERROR,
};

export type Student = {
  id: string;
  name: string;
  avatarURL: string;
  lecturesAttended: number;
  totalLectures: number;
  marks: Marks;
};

export type Marks = {
  code: {
    subjectTitle: "Introduction to mathematics";
    totalMarks: 100;
    marksObtained: 56;
  };
};
