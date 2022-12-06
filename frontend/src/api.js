import axios from "axios";

const serverBaseUrl = "http://localhost:8080"; // Get from .env file

/*
class Student { 
  name
}
*/

class ApiClient {
  async getAllStudents() {
    return axios
      .get(serverBaseUrl + "/getAllStudents", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      });
  }

  async saveCodeSession(studentName, sessionUrl, codeBlockName) {
    return axios
      .post(serverBaseUrl + "/saveCodeSession", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        return res.data;
      });
  }

  async loginUser(credentials) {
    return axios
      .post(serverBaseUrl + "/login", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      .then((res) => {
        return res.data;
      });
  }
}

const apiClient = new ApiClient();

export { apiClient };
