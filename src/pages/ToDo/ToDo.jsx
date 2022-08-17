import { ToDoWrapper, ToDoContainer } from "./style";

import ToDoList from "../../components/ToDoList/ToDoList";
import { ToDoData } from "../../utils/ToDoList";
const ToDo = () => {
  return (
    <ToDoContainer>
      <ToDoWrapper>
        {ToDoData.map((item) => {
          const { id, title, tasks } = item;
          return <ToDoList key={id} title={title} tasks={tasks} />;
        })}
      </ToDoWrapper>
    </ToDoContainer>
  );
};

export default ToDo;
