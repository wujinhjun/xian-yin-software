import { useEffect, useState, useRef } from "react";
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

import useContextMenu from "../../hooks/useContextMenu";

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
  const tasksArr = Helper.objToArr(tasksList);
  const [activeTasks, setActiveTasks] = useState(
    tasksArr.map((item) => {
      if (item.isActive) {
        return item.id;
      } else {
        return null;
      }
    })
  );
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

  const updateToDoContents = (id, contents) => {
    const modifiedItem = { ...tasksList[id], contents };
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
    // console.log(dataStore.get(`ToDo.${title}.tasks[${index}]`));
    // console.log(activeTasks.includes(taskID));
  };

  //   delete
  const deleteToDoItem = (id) => {
    const { [id]: value, ...afterDelete } = tasksList;
    setTasksList(afterDelete);
    saveTasksToStore(afterDelete, title);
  };

  //   complex interactive

  //   get target tasks

  const getTasksObj = (targetTitle) => {
    // console.log(Helper.flattenArr(dataStore.get(`ToDo.${targetTitle}.tasks`)));
    return Helper.flattenArr(dataStore.get(`ToDo.${targetTitle}.tasks`));
  };

  const removeTask = (oldTitle, targetTitle, taskID) => {
    // get targetTask
    const targetTask = tasksList[taskID];
    // delete item
    deleteToDoItem(taskID);
    //get target item
    // add item to target tasksList
    const targetTasks = getTasksObj(targetTitle);
    console.log(targetTasks);
    const newTargetTasks = { ...targetTasks, [taskID]: targetTask };
    console.log(newTargetTasks);
    saveTasksToStore(newTargetTasks, targetTitle);
    // reload pages
    window.location.reload();
  };

  const clickElement = useContextMenu(
    [
      {
        label: `折叠`,
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            `to-do-item`
          );
          if (parentElement) {
            const clickID = parentElement.dataset.id;
            // console.log(clickID);
            changeActive(clickID);
          }
        },
      },
      {
        label: `ToDo`,
        click: () => {
          //   console.log("To Do");

          const parentElement = Helper.getParentNode(
            clickElement.current,
            `to-do-item`
          );
          if (parentElement) {
            //   get the tasks' title

            const oldTitle = parentElement.dataset.category;
            const newTitle = `ToDo`;
            if (oldTitle !== newTitle) {
              // set the old title's tasks for afterDelete
              const clickID = parentElement.dataset.id;
              // set the new title's tasks for move
              //   const targetTasks = dataStore.get(`ToDo.`);
              removeTask(oldTitle, newTitle, clickID);
              //   getTasksObj(newTitle);
            }
          }
        },
      },
      {
        label: "Doing",
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            `to-do-item`
          );
          if (parentElement) {
            //   get the tasks' title

            const oldTitle = parentElement.dataset.category;
            const newTitle = `Doing`;
            if (oldTitle !== newTitle) {
              // set the old title's tasks for afterDelete
              const clickID = parentElement.dataset.id;
              // set the new title's tasks for move
              //   const targetTasks = dataStore.get(`ToDo.`);
              removeTask(oldTitle, newTitle, clickID);
              //   getTasksObj(newTitle);
            }
          }
        },
      },
      {
        label: "Done",
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            `to-do-item`
          );
          if (parentElement) {
            //   get the tasks' title

            const oldTitle = parentElement.dataset.category;
            const newTitle = `Done`;
            if (oldTitle !== newTitle) {
              // set the old title's tasks for afterDelete
              const clickID = parentElement.dataset.id;
              // set the new title's tasks for move
              //   const targetTasks = dataStore.get(`ToDo.`);
              removeTask(oldTitle, newTitle, clickID);
              //   getTasksObj(newTitle);
            }
          }
        },
      },
    ],
    `.to-do-list-${title}`,
    tasksArr
  );

  return (
    <>
      <ToDoListWrapper
        className={title}
        onDrag={() => {
          console.log("drag");
        }}
      >
        <TitleWrapper>
          <TitleContainer>
            <Title>{title}</Title>
            <NumberCircle>{count}</NumberCircle>
          </TitleContainer>
        </TitleWrapper>
        <AddItem onClick={() => addTask()}>
          <AddIcon icon={plus}></AddIcon>
        </AddItem>
        <ItemList className={`to-do-list-${title}`}>
          {tasksArr.map((item) => {
            const { id, name, isActive, contents, startDate, endDate, isNew } =
              item;
            return (
              <ToDoItem
                key={id}
                title={title}
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
                updateToDoContents={updateToDoContents}
              ></ToDoItem>
            );
          })}
        </ItemList>
      </ToDoListWrapper>
    </>
  );
};

export default ToDoList;
