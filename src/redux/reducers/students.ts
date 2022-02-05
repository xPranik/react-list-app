import { Students } from "../types";
import { Student } from "../types/students";
import { consts } from "../../consts";
import { ActionType } from "../actions";

type stateType = {
  totalRecords: number;
  totalPages: number;
  students: Student[];
  isLoading: boolean;
  error: any;
};

const initialState: stateType = {
  totalRecords: 0,
  totalPages: 0,
  students: [],
  isLoading: false,
  error: null,
};

export const StudentsReducer = (
  state = initialState,
  action: ActionType
): stateType => {
  switch (action.type) {
    case Students.FETCH_STUDENTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case Students.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        students: state.students.concat(action.payload.students),
        totalRecords: action.payload.totalRecords,
        totalPages: Math.ceil(action.payload?.totalRecords / consts.limit),
      };
    case Students.FETCH_STUDENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        students: [],
      };
    case Students.SEARCH_STUDENTS:
      return {
        ...state,
        isLoading: true,
        error: null,
        students: [],
      };
    case Students.SEARCH_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        students: state.students.concat(action.payload.students),
        totalRecords: action.payload.totalRecords,
        totalPages: Math.ceil(action.payload.totalRecords / consts.limit),
      };
    case Students.SEARCH_STUDENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        students: [],
      };
    default:
      return state;
  }
};
