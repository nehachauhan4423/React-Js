import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { addTodo} from "../Redux/Actions/TodoActions"; // Added missing imports
import { useDispatch, useSelector } from "react-redux";

const Add = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!list.trim()) {
      alert("Please enter a todo");
      return;
    }

    let obj = { list };
    dispatch(addTodo(obj));
    setList(""); // Clear input after submission
    alert("Your record is added");
  };

  // Get all todos from the Redux store
  const AllTodos = useSelector(state => state.todo.todoList || []); // Default to an empty array if no todos are found

  // Fetch todos on component mount
  useEffect(() => {
    dispatch(ViewTodo());
  }, [dispatch]);

  // Handle delete todo action
  const handleDelete = (id) => {
    dispatch(DeleteTodo(id)); // Dispatch delete action
    alert("Your record is being deleted...");
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", padding: "20px" }}>
      <div className="w-50 mt-5 p-3" style={{ backgroundColor: "#1F1F1F", borderRadius: "8px", padding: "20px" }}>
        <h2 className="bg-dark text-white p-2 rounded-4" style={{ textAlign: "center", marginBottom: "20px" }}>
          Todo List
        </h2>
        <div className="mt-4">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              style={{
                borderRadius: "10px 0 0 10px",
                boxShadow: "none",
                backgroundColor: "#333",
                color: "white",
                border: "1px solid #444"
              }}
              type="text"
              className="w-100 ps-2"
              placeholder="Add a Todo..."
              onChange={(e) => setList(e.target.value)}
              value={list}
            />
            <button
              type="submit"
              className="btn btn-dark text-white"
              style={{ borderRadius: "0 10px 10px 0", backgroundColor: "#444", border: "1px solid #555" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-dark mt-4 p-4 rounded-4" style={{ backgroundColor: "#222" }}>
          <ul className="p-0 m-0">
            {AllTodos.map((item, index) => (
              <li key={index} className="d-flex justify-content-between p-2" style={{ borderBottom: "1px solid #444" }}>
                <h4 className="p-0 m-0 w-50 d-flex flex-start" style={{ color: "#ddd" }}>{item.list}</h4>
                <button
                  className="btn btn-danger"
                  style={{ backgroundColor: "#b32d00", border: "none" }}
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
