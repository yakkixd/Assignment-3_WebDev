import React from "react";

function Summary({ students, styles }) {
  const total = students.length;
  const passed = students.filter((s) => s.marks >= 40).length;
  const failed = students.filter((s) => s.marks < 40).length;

  const average =
    total === 0
      ? 0
      : (
          students.reduce((sum, s) => sum + s.marks, 0) / total
        ).toFixed(2);

  return (
    <div style={styles.summary}>
      <h3>📊 Overview</h3>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p style={{ color: "#00ff9f" }}>Passed: {passed}</p>
      <p style={{ color: "#ff4d6d" }}>Failed: {failed}</p>
    </div>
  );
}

export default Summary;