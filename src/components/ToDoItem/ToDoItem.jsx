import { useState, useEffect, useRef } from "react";

import useKeyPress from "../../hooks/useKeyPress";
import useContextMenu from "../../hooks/useContextMenu";

import ContCentContainer from "./ContentsContainer";

import handleIcon from "../../static/svg/chevron-down.svg";
import deleteIcon from "../../static/svg/trash.svg";
import plus from "../../static/svg/plus.svg";

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

import * as Helper from "../../utils/Helpers";

const Store = window.require("electron-store");
const dataStore = new Store({
  name: "data",
  watch: true,
});

const ToDoItem = (props) => {
  const {
    id,
    name,
    isActive,
    contents,
    startDate,
    endDate,
    isNewPart,
    updateToDoName,
    deleteToDoItem,
    updateToDoActive,
    changeActive,
  } = props;
  //   const [active, setActive] = useState(isActive);
  const active = isActive;
  const [editStatus, setEditStatus] = useState(false);
  const [isNew, setIsNew] = useState(isNewPart);
  const [value, setValue] = useState(name);
  const node = useRef(null);

  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);

  //   const changeActive = () => {
  //     // console.log(active);
  //     setActive(!active);
  //   };
  const editItem = () => {
    setEditStatus(id);
  };
  const deleteItem = (id) => {
    deleteToDoItem(id);
  };

  const clickElement = useContextMenu(
    [
      {
        label: `${active ? "收起" : "展开"}`,
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            "to-do-item"
          );
          if (parentElement) {
            const clickID = parentElement.dataset.id;
            // console.log("unfolding");
            // console.log(clickID + " " + active);
            // console.log(id);
            // updateToDoActive(clickID, active);
            // console.log(active);
            changeActive(clickID);
          }
          //   console.log(parentElement);
        },
      },
      {
        label: `删除`,
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            "to-do-item"
          );
          if (parentElement) {
            // console.log("unfolding");
            deleteItem(id);
          }
        },
      },
      {
        label: "重命名",
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            "to-do-item"
          );
          if (parentElement) {
            console.log("rename");
            editItem();
          }
        },
      },
      {
        label: "新建子项",
        click: () => {
          const parentElement = Helper.getParentNode(
            clickElement.current,
            "to-do-item"
          );
          if (parentElement) {
            console.log("new son");
          }
        },
      },
    ],
    ".to-do-list",
    [active]
  );

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
          {contents.map((item) => {
            return (
              <ContCentContainer
                key={item.id}
                isCompleted={item.isCompleted}
                content={item.content}
              ></ContCentContainer>
            );
          })}
          <ContentAdd>new</ContentAdd>
          {/* <DateGap>
            {startDate}-{endDate}
          </DateGap> */}
        </ContentsContainer>
      )}
    </ItemWrapper>
  );
};

export default ToDoItem;
