import express from "express";
import cors from "cors";
const app = express();
import { users } from "./db/users.js";
import { GROUPS } from "../backend/constants.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  console.log("req", req);

  const { username, password } = req.body.username;

  const userRecord = users.filter((u) => u.user_name == username);

  if (userRecord.length > 0) {
    const currUser = userRecord[0];
    if (currUser.password == password) {
      if (currUser.mentor) {
        res.send({
          token: `${username}11`,
          group: GROUPS.ADMIN,
        });
      } else {
        res.send({
          token: `${username}11`,
          group: GROUPS.USER,
        });
      }
    } else {
      // Unauthorized
      res.sendStatus(401);
    }
  } else {
    // Not found
    res.sendStatus(404);
  }
  console.log(req);
});

app.get("/getAllStudents", (req, res) => {
  const students = users.filter((i) => !i.mentor).map((user) => user.user_name);
  res.send({
    students: students,
  });
});

app.post("/saveCodeSession", (req, res) => {
  studentName = req.studentName;
  code = req.codeBlockName;

  // Check there is no session for this student on this lesson
  session = sessionLink.filter(
    (session) =>
      session.student_name == studentName &&
      session.code == session.code_block_name
  );

  if (session > 0) {
    return session[0].link;
  } else {
    uuid = uuidv4();
    link = `/${uuid}`;
    sessionLink.push({
      student_name: studentName,
      code_block_name: code,
      link: link,
    });

    res.send({
      link: link,
    });
  }
});

app.listen(8080, () => console.log("API is running on http://localhost:8080"));
