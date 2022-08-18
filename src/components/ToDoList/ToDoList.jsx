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
import useContextMenu from "../../hooks/useContextMenu";
import ToDoItem from "../ToDoItem/ToDoItem";
import * as Helper from "../../utils/Helpers";

const Store = window.require("electron-store");
const dataStore = new Store({
  name: "data",
  watch: true,
});
const saveTasksToStore = (tasks, title) => {
  const newTasksArr = Helper.objToArr(tasks);
  dataStore.set(`ToDo.${title}.tasks`, newTasksArr);
  //   console.log(dataStore.get(`ToDo.ToDo.tasks`));
};

const ToDoList = (props) => {
  const { title, tasks } = props;
  const taskObj = Helper.flattenArr(tasks);
  const [tasksList, setTasksList] = useState(taskObj);
  const [activeTasks, setActiveTasks] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const tasksArr = Helper.objToArr(tasksList);
  const count = tasksArr.length;

  //   create
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
    // console.log(dataStore.get(`ToDo`));
    // console.log("add");
  };

  // update
  const updateToDoName = (id, name, isNew) => {
    const modifiedItem = { ...tasksList[id], name, isNew: false };
    const newTasks = { ...tasksList, [id]: modifiedItem };
    setTasksList(newTasks);
    saveTasksToStore(newTasks, title);
  };

  const updateToDoActive = (id, active) => {
    const modifiedItem = { ...tasksList[id], isActive: active };
    const newTasks = { ...tasksList, [id]: modifiedItem };
    setTasksList(newTasks);
    saveTasksToStore(newTasks, title);
  };

  // change active file
  const changeActive = (taskID) => {
    if (!activeTasks.includes(taskID)) {
      setActiveTasks([...activeTasks, taskID]);
      updateToDoActive(taskID, true);
    } else {
      const afterClose = activeTasks.filter((itemID) => itemID !== taskID);
      setActiveTasks(afterClose);
      updateToDoActive(taskID, false);
    }
    console.log(dataStore.get(`ToDo.${title}.tasks`));
    console.log(activeTasks.includes(taskID));
  };

  const editItem = (id) => {
    setEditStatus(id);
  };

  //   delete
  const deleteToDoItem = (id) => {
    const { [id]: value, ...afterDelete } = tasksList;
    setTasksList(afterDelete);
    saveTasksToStore(afterDelete, title);
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
                isActive={activeTasks.includes(id)}
                contents={contents}
                startDate={startDate}
                endDate={endDate}
                isNewPart={isNew}
                updateToDoName={updateToDoName}
                deleteToDoItem={deleteToDoItem}
                changeActive={changeActive}
                devList={tasksArr}
              ></ToDoItem>
            );
          })}
        </ItemList>
      </ToDoListWrapper>
    </>
  );
};

export default ToDoList;
