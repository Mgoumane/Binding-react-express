import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import StudentsList from "./components/StudentsList";
// import StudentAdd from "./components/StudentAdd";
// import NewStudent from "./components/NewStudent";

function App() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");


  useEffect(() => {
    getStudents();
    addStudent();
  }, []);

  const getStudents = () => {
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStudents(response);
      });
  };
  const addStudent = () => {
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: studentName,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
          console.log(response);
         
      });
  };

  return (
    <>
      <div>
        {students.map((student) => {
          return <p>{student.name}</p>;
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Student name..."
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
          }}
          onKeyPress={(event) => {
              if (event.key === "Enter") {
                  addStudent()
              }
          }}
        ></input>
        <button onClick={addStudent}>Add Student</button>
      </div>      
    </>
  );
}

export default App;
