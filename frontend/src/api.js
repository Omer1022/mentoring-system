import axios from "axios";

const serverBaseUrl = "http://localhost:8080";

class ApiClient {
  async getAllStudents() {
    return axios
      .get(serverBaseUrl + "/getAllStudents", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data.students;
      });
  }

  async saveCodeSession(studentName, codeBlockName) {
    return axios
      .post(serverBaseUrl + "/saveCodeSession", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          studentName: studentName,
          codeBlockName: codeBlockName,
        },
      })
      .then((res) => {
        return res.data;
      });
  }

  async loginUser(username, password) {
    return axios
      .post(serverBaseUrl + "/login", { username, password })
      .then((res) => {
        return res.data;
      });
  }
}

const apiClient = new ApiClient();

export { apiClient };
