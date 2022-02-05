import React, { FC, useRef, useState } from "react";
import { SearchStyled, SearchBar } from "./SearchStyled";

interface SearchProps {
  changeParams: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ changeParams }) => {
  const [params, setParams] = useState<string>("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeHandler = (value: string) => {
    setParams(value);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => changeParams(value), 500);
  };

  return (
    <SearchStyled>
      <SearchBar
        type="text"
        value={params}
        placeholder={"Type name..."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeHandler(e.target.value)
        }
      />
    </SearchStyled>
  );
};
