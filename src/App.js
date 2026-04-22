import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import Summary from "./Summary";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Mohit Yadav", marks: 35 },
    { id: 2, name: "Rishika", marks: 100 },
  ]);

  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };
    setStudents([...students, newStudent]);
  };

  const updateMarks = (id, newMarks) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, marks: Number(newMarks) } : s
    );
    setStudents(updated);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}> Student Dashboard</h1>

        <StudentForm addStudent={addStudent} styles={styles} />
        <Summary students={students} styles={styles} />
        <StudentTable
          students={students}
          updateMarks={updateMarks}
          styles={styles}
        />
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  container: {
    width: "800px",
    background: "#111827",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(0,255,150,0.3)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#00ff9f",
    textShadow: "0 0 10px #00ff9f",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#1f2937",
    color: "white",
  },
  inputSmall: {
    padding: "5px",
    width: "70px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#1f2937",
    color: "white",
  },
  button: {
    padding: "8px 15px",
    border: "none",
    background: "#00ff9f",
    color: "#000",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  summary: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    background: "#1f2937",
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
  },
  th: {
    background: "#00ff9f",
    color: "#000",
    padding: "10px",
  },
  tr: {
    borderBottom: "1px solid #333",
  },
};

export default App;