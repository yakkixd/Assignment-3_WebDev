import React from "react";

function StudentTable({ students, updateMarks, styles }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Marks</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => {
          const isPass = s.marks >= 40;

          return (
            <tr key={s.id} style={styles.tr}>
              <td>{s.name}</td>
              <td>
                <input
                  type="number"
                  value={s.marks}
                  onChange={(e) =>
                    updateMarks(s.id, e.target.value)
                  }
                  style={styles.inputSmall}
                />
              </td>
              <td
                style={{
                  color: isPass ? "#00ff9f" : "#ff4d6d",
                  fontWeight: "bold",
                }}
              >
                {isPass ? "Pass" : "Fail"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StudentTable;