import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  ToDoListWrapper,
  TitleWrapper,
  TitleContainer,
  Title,
  NumberCircle,
  AddItem,
  AddIcon,
  ItemList,
} from "./style";

import plus from "../../static/svg/plus.svg";

import ToDoItem from "../ToDoItem/ToDoItem";
import * as Helper from "../../utils/Helpers";

const Store = window.require("electron-store");
const dataStore = new Store({
  name: "data",
  accessPropertiesByDotNotation: false,
});
const ToDoList = (props) => {
  const { id, title, tasks } = props;
  const taskObj = Helper.flattenArr(tasks);
  const [count, setCount] = useState(tasks.length);
  const [tasksList, setTasksList] = useState(taskObj);
  const tasksArr = Helper.objToArr(tasksList);

  //   console.log(tasksArr);

  const addTask = () => {
    const newID = uuidv4();
    const newTask = {
      id: newID,
      name: "",
      isActive: false,
      contents: [],
      startDate: new Date().getTime(),
      endDate: new Date().getTime(),
      isNew: true,
    };
    setTasksList({ ...tasksList, [newID]: newTask });
    // // dataStore.set(`ToDo.${id}.tasks`: { ...tasksList, [newID]: newTask });
    // console.log(dataStore.get(`ToDo.`));
    console.log("add");
  };

  const updateToDoName = (id, name, isNew) => {
    const modifiedItem = { ...tasksList[id], name, isNew: false };
    const newTasks = { ...tasksList, [id]: modifiedItem };
    if (isNew) {
      setTasksList(newTasks);
      console.log(title + " init");
    } else {
      setTasksList(newTasks);
      console.log(title + " update");
    }
  };

  return (
    <>
      <ToDoListWrapper>
        <TitleWrapper>
          <TitleContainer>
            <Title>{title}</Title>
            <NumberCircle>{count}</NumberCircle>
          </TitleContainer>
        </TitleWrapper>
        <AddItem onClick={() => addTask()}>
          <AddIcon icon={plus}></AddIcon>
        </AddItem>
        <ItemList className="to-do-list">
          {tasksArr.map((item) => {
            const { id, name, isActive, contents, startDate, endDate, isNew } =
              item;
            return (
              <ToDoItem
                key={id}
                id={id}
                name={name}
                isActive={isActive}
                contents={contents}
                startDate={startDate}
                endDate={endDate}
                isNewPart={isNew}
                updateToDoName={updateToDoName}
              ></ToDoItem>
            );
          })}
        </ItemList>
      </ToDoListWrapper>
    </>
  );
};

export default ToDoList;
