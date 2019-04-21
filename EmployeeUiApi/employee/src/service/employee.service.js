import { HttpClient } from "./httpClient";

const EMPLOYEE_API = "http://localhost:5000/api/employees";
const EMPLOYEE_SEARCH_URL = "http://localhost:5000/GetEmployeeByName";

// The CRUD Operations of the Todo Resource.
//Create
const post = employee => {
  return HttpClient.post(EMPLOYEE_API, employee);
};

//Read
const get = () => {
  return HttpClient.get(EMPLOYEE_API);
};

//Update
const put = employee => {
  return HttpClient.put(EMPLOYEE_API + "/" + employee.id, employee);
};

//Delete is keyword can't use
const del = employee => {
  return HttpClient.delete(`${EMPLOYEE_API}/${employee.id}`);
};

/** GET employee by id. Will 404 if id not found */
const getEmployee = id => {
  return HttpClient.get(`${EMPLOYEE_API}/${id}`);
};

/* GET employeees whose name contains search term */
const searchEmployees = term => {
  let url = `${EMPLOYEE_SEARCH_URL}/${term}`;
  console.log("url: " + url);
  return HttpClient.get(url);
};

//Encapsulating in a JSON object

const EmployeeService = {
  post,
  get,
  put,
  delete: del,
  getEmployee,
  searchEmployees
};

export { EmployeeService };
