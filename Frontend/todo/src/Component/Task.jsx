/* eslint-disable react/prop-types */
import axios from "axios";
import { Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
const Task = ({ id, task, isCompleted }) => {
  const taskCompleted = (id) => {
    axios
      .put(`http://localhost:4000/todo/edit/${id}`, {
        isCompleted: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  if (!isCompleted) {
    return (
      <>
        <Container className="d-flex justify-content-center mt-3">
          <div
            className="item  d-flex justify-content-between"
            style={{ width: "30rem", background: "#8658fe" }}
            key={id}
          >
            <div
              className="content"
              style={{ padding: "5px", marginLeft: "10px" }}
            >
              {task}
            </div>
            <div
              style={{ marginRight: "20px", color: "white" }}
              onClick={() => taskCompleted(id)}
            >
              <FaTrashAlt />
            </div>
          </div>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container className="d-flex justify-content-center mt-3">
        <div
          className="item  d-flex justify-content-between"
          style={{ width: "30rem", background: "#8658fe" }}
          key={id}
        >
          <div
            className="content"
            style={{ padding: "5px", marginLeft: "10px" }}
          >
            {task}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Task
