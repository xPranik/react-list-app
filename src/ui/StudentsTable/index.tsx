import React, { FC, useEffect, useRef, useState } from "react";
import { StudentsTableWrapper } from "./StydentsTableStyled";
import { Search } from "../Search";
import { StudentsList } from "../StudentsList";
import { fetchStudents, searchStudents } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { consts } from "../../consts";

export const StudentsTable: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, totalPages } = useSelector(
    (state: RootState) => state.Students
  );
  const [params, setParams] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const skip = useRef<number>(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = consts.limit;
  const [isBottom, setIsBottom] = useState<boolean>(false);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", checkIsBottom);
      return () => {
        wrapperRef.current?.removeEventListener("scroll", checkIsBottom);
      };
    }
  }, [totalPages, skip.current, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    if (params.length >= 3) {
      dispatch(searchStudents({ params }));
    } else {
      dispatch(searchStudents({ params: "" }));
    }
  }, [params]);

  const checkIsBottom = () => {
    if (
      wrapperRef.current &&
      wrapperRef.current?.scrollTop + wrapperRef.current?.offsetHeight >=
        wrapperRef.current.scrollHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (isBottom) {
      if (!isLoading && currentPage < totalPages) {
        timeout.current = setTimeout(() => {
          skip.current = currentPage * limit;
          setCurrentPage((prev) => prev + 1);
          dispatch(fetchStudents({ limit: limit, skip: skip.current, params }));
        }, 200);
      }
    }
  }, [isBottom, totalPages]);

  return (
    <StudentsTableWrapper>
      <Search changeParams={setParams} />
      <StudentsList wrapperRef={wrapperRef} />
    </StudentsTableWrapper>
  );
};
