import { ToDoWrapper, ToDoContainer } from "./style";

import ToDoList from "../../components/ToDoList";

const ToDo = () => {
  return (
    <ToDoContainer>
      <ToDoWrapper>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
        <ToDoList></ToDoList>
      </ToDoWrapper>
    </ToDoContainer>
  );
};

export default ToDo;
