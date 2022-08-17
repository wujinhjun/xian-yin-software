import { ToDoWrapper, ToDoContainer } from "./style";

import ToDoList from "../../components/ToDoList/ToDoList";
import { useState } from "react";
import * as Helpers from "../../utils/Helpers";
const Store = window.require("electron-store");
const dataStore = new Store({
  name: "data",
  accessPropertiesByDotNotation: false,
});
const initStore = {
  0: {
    id: 0,
    title: "To Do",
    tasks: [],
  },
  1: {
    id: 1,
    title: "Doing",
    tasks: [],
  },
  2: {
    id: 2,
    title: "Done",
    tasks: [],
  },
};

/*
Store={
    "ToDo": [
        0:{
            id: 0
            title: "",
            tasks: []
        },
        1:{
            id: 1
            title: "",
            tasks: []
        },
        2:{
            id: 2
            title: "",
            tasks: []
        },
    ]
}
*/

const saveDataToStore = (datas) => {
  const ToDoDataStoreObj = Helpers.objToArr(datas).reduce((result, data) => {
    const { id, title, tasks } = data;
    result[id] = {
      id,
      title,
      tasks,
    };
    return result;
  }, {});
  dataStore.set("ToDo", ToDoDataStoreObj);
};

const ToDo = () => {
  const [ToDoData, setToDoData] = useState(dataStore.get("ToDo") || initStore);
  const ToDoDataArr = Helpers.objToArr(ToDoData);
  //   console.log(ToDoDataArr);

  return (
    <ToDoContainer>
      <ToDoWrapper>
        {ToDoDataArr.map((item) => {
          const { id, title, tasks } = item;
          return <ToDoList key={id} id={id} title={title} tasks={tasks} />;
        })}
      </ToDoWrapper>
    </ToDoContainer>
  );
};

export default ToDo;
