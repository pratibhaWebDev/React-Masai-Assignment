import React, { useEffect, useState } from "react";

const TodosWithPagination = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(todos.length / todosPerPage);
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Todos (Page {currentPage})</h2>
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === i + 1 ? "#4CAF50" : "white",
              color: currentPage === i + 1 ? "white" : "black",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              border: "1px solid #ccc",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TodosWithPagination;
