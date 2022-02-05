import { Dispatch } from "react";
import { dataAPI } from "../../api";
import { Students } from "../types";
import { Student } from "../types/students";

export interface fetchProps {
  limit?: number;
  skip?: number;
  params?: string;
}

const searchStudents =
  ({ params = "" }: fetchProps) =>
  async (dispatch: Dispatch<FetchActionStart | FetchAction>) => {
    dispatch({
      type: Students.SEARCH_STUDENTS,
    });
    try {
      const res = await dataAPI
        .get(`/api/students?searchTerm=${params}&limit=20&skip=0`)
        .then((res) => {
          return res.data;
        });
      if (res) {
        dispatch({
          type: Students.SEARCH_STUDENTS_SUCCESS,
          payload: {
            students: res.students,
            totalRecords: res.totalRecords,
          },
        });
      }
    } catch (e: any) {
      console.error(e);
      dispatch({
        type: Students.SEARCH_STUDENTS_ERROR,
        error: JSON.stringify(e.message),
      });
    }
  };

const fetchStudents =
  ({ limit, skip = 0, params }: fetchProps) =>
  async (dispatch: Dispatch<FetchActionStart | FetchAction>) => {
    dispatch({
      type: Students.FETCH_STUDENTS,
    });
    try {
      setTimeout(async () => {
        const res = await dataAPI
          .get(`/api/students?searchTerm=${params}&limit=${limit}&skip=${skip}`)
          .then((res) => {
            return res.data;
          });
        if (res) {
          dispatch({
            type: Students.FETCH_STUDENTS_SUCCESS,
            payload: {
              students: res.students,
              totalRecords: res.totalRecords,
            },
          });
        }
      }, 2000);
    } catch (e: any) {
      console.error(e);
      dispatch({
        type: Students.FETCH_STUDENTS_ERROR,
        error: JSON.stringify(e.message),
      });
    }
  };

interface PayloadI {
  students: Student[];
  totalRecords: number;
}

interface FetchActionStart {
  type: string;
}
interface FetchAction extends FetchActionStart {
  payload: PayloadI;
  error: any;
}

export type ActionType = FetchAction;

export { fetchStudents, searchStudents };
