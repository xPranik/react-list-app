import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { students } from "./mock";

export const dataAPI = axios.create();
export let mock = new MockAdapter(dataAPI);

function parseQueryString(url) {
  const queryString = url.replace(/.*\?/, "");
  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);
  const result = {};

  urlParams.forEach((val, key) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}

mock.onGet(/api\/students\/?(.*)/).reply((config) => {
  const query = parseQueryString(config.url);

  const searchedList = students.filter((item) =>
    item.name.toLowerCase().includes(query.searchTerm.toLowerCase())
  );
  let filteredStudents = searchedList.slice(
    +query.skip,
    +query.skip + +query.limit
  );

  if (query.searchTerm === "error") {
    return [
      401,
      {
        error: "Required params skip and limit",
      },
    ];
  } else {
    return [
      200,
      {
        students: filteredStudents,
        totalRecords: searchedList.length,
      },
    ];
  }
});
