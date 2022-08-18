import { ToDoWrapper, ToDoContainer } from "./style";

import ToDoList from "../../components/ToDoList/ToDoList";
import { useState } from "react";
import * as Helpers from "../../utils/Helpers";
const Store = window.require("electron-store");
const initStore = {
  ToDo: {
    id: 0,
    title: "ToDo",
    tasks: [],
  },
  Doing: {
    id: 1,
    title: "Doing",
    tasks: [],
  },
  Done: {
    id: 2,
    title: "Done",
    tasks: [],
  },
};

const schemaStructure = {
  ToDo: {
    type: "object",
    properties: {
      id: {
        type: "number",
        default: 0,
      },
      title: {
        type: "string",
        default: "ToDo",
      },
      tasks: {
        type: "array",
        default: [],
      },
    },
  },
  Doing: {
    type: "object",
    properties: {
      id: {
        type: "number",
        default: 1,
      },
      title: {
        type: "string",
        default: "ToDo",
      },
      tasks: {
        type: "array",
        default: [],
      },
    },
  },
  Done: {
    type: "object",
    properties: {
      id: {
        type: "number",
        default: 2,
      },
      title: {
        type: "string",
        default: "ToDo",
      },
      tasks: {
        type: "array",
        default: [],
      },
    },
  },
};
// const dataStore = new Store({
//   name: "data",
//   accessPropertiesByDotNotation: false,
//   watch: true,
//   default: initStore,
//   //   schema: schemaStructure,
// });
const dataStore = new Store({
  name: "data",
  accessPropertiesByDotNotation: false,
  watch: true,
  default: initStore,
});

// dataStore.set({ ToDo: initStore });
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
  dataStore.set({ ToDo: ToDoDataStoreObj });
};

const ToDo = () => {
  const [ToDoData, setToDoData] = useState(dataStore.get("ToDo"));
  if (!dataStore.get("ToDo")) {
    saveDataToStore(initStore);
    console.log(dataStore);
  }

  const ToDoDataArr = Helpers.objToArr(ToDoData);

  return (
    <ToDoContainer>
      <ToDoWrapper>
        {ToDoDataArr.map((item, index) => {
          const { id, title, tasks } = item;
          return <ToDoList key={index} title={title} tasks={tasks} />;
        })}
      </ToDoWrapper>
    </ToDoContainer>
  );
};

export default ToDo;
