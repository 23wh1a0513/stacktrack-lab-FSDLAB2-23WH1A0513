import React, { useEffect, useState } from "react";

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionComponent;