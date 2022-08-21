import { useState, useEffect, useRef } from "react";

import useKeyPress from "../../hooks/useKeyPress";

import ContCentContainer from "./ContentsContainer";
import * as Helpers from "../../utils/Helpers";
import { v4 as uuidv4 } from "uuid";

import handleIcon from "../../static/svg/chevron-down.svg";
import deleteIcon from "../../static/svg/trash.svg";

import {
  ItemWrapper,
  ItemContainer,
  ItemContent,
  ItemIcon,
  ContentsContainer,
  DateGap,
  ItemEditInput,
  ContentAdd,
} from "./style";

const Store = window.require("electron-store");
const dataStore = new Store({
  name: "data",
  watch: true,
});

const ToDoItem = (props) => {
  const {
    title,
    id,
    name,
    isActive,
    contents,
    startDate,
    endDate,
    isNewPart,
    updateToDoName,
    deleteToDoItem,
    changeActive,
    updateToDoContents,
  } = props;
  //   const [active, setActive] = useState(isActive);

  const [editStatus, setEditStatus] = useState(false);
  const [isNew, setIsNew] = useState(isNewPart);
  const [value, setValue] = useState(name);
  const node = useRef(null);

  const [contentsList, setContentsList] = useState(contents);
  const [completedList, setCompletedList] = useState([]);
  const contentsArr = Helpers.objToArr(contentsList);
  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);
  const active = isActive;

  const editItem = () => {
    setEditStatus(id);
  };
  const deleteItem = (id) => {
    deleteToDoItem(id);
  };

  //
  const createNewContent = () => {
    const newID = uuidv4();
    const newContent = {
      id: newID,
      isCompleted: false,
      content: "",
      isNew: true,
    };

    setContentsList({ ...contentsList, [newID]: newContent });
  };

  const updateContentCompleted = (contentID, completed, itemID = id) => {
    const modifiedContent = {
      ...contentsList[contentID],
      isCompleted: completed,
    };
    const newContents = { ...contentsList, [contentID]: modifiedContent };
    setContentsList(newContents);
    updateToDoContents(itemID, newContents);
  };

  const updateTaskContent = (contentID, value, itemID = id) => {
    const modifiedContent = {
      ...contentsList[contentID],
      content: value,
      isNew: false,
    };
    const newContents = { ...contentsList, [contentID]: modifiedContent };
    setContentsList(newContents);
    updateToDoContents(itemID, newContents);
  };

  const changeComplete = (contentID) => {
    if (!completedList.includes(contentID)) {
      setCompletedList([...completedList, contentID]);
      updateContentCompleted(contentID, true);
    } else {
      const afterClose = completedList.filter((itemID) => itemID !== contentID);
      setCompletedList(afterClose);
      updateContentCompleted(contentID, false);
    }
  };

  const deleteContent = (contentID) => {
    const { [contentID]: value, ...afterDelete } = contentsList;
    setCompletedList(afterDelete);
    updateToDoContents(id, afterDelete);
  };

  useEffect(() => {
    if (isNew) {
      setEditStatus(id);
    }
    if (enterPress && value.trim() !== "") {
      updateToDoName(id, value, isNew);
      setEditStatus(false);
      setIsNew(false);
    }
    if (escPress) {
      setEditStatus(false);
      if (isNew) {
        deleteItem(id);
      }
      setIsNew(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enterPress, escPress]);

  useEffect(() => {
    if (editStatus === id) {
      node.current.focus();
    }
  }, [editStatus]);

  return (
    <ItemWrapper
      data-id={id}
      data-category={title}
      className={active ? "active to-do-item" : "to-do-item"}
    >
      <ItemContainer>
        {id !== editStatus && !isNew && (
          <ItemContent onDoubleClick={() => editItem()}>{value}</ItemContent>
        )}
        {(isNew || id === editStatus) && (
          <ItemContent>
            <ItemEditInput
              ref={node}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </ItemContent>
        )}
        <ItemIcon
          onClick={() => {
            deleteItem(id);
          }}
          icon={deleteIcon}
        />
        <ItemIcon
          onClick={() => {
            changeActive(id);
          }}
          className={active ? "active" : ""}
          icon={handleIcon}
        />
      </ItemContainer>
      {!isNew && active && (
        <ContentsContainer>
          {contentsArr.map((item) => {
            return (
              <ContCentContainer
                key={item.id}
                id={item.id}
                isCompleted={item.isCompleted}
                content={item.content}
                isNewPart={item.isNew}
                updateTaskContent={updateTaskContent}
                changeComplete={changeComplete}
                deleteContent={deleteContent}
              ></ContCentContainer>
            );
          })}
          <ContentAdd onClick={() => createNewContent()}>new</ContentAdd>
          {/* <DateGap>
            {startDate}-{endDate}
          </DateGap> */}
        </ContentsContainer>
      )}
    </ItemWrapper>
  );
};

export default ToDoItem;
