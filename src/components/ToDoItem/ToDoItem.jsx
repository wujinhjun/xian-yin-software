import { useState, useEffect } from "react";

import useKeyPress from "../../hooks/useKeyPress";

import ContCentContainer from "./ContentsContainer";

import handleIcon from "../../static/svg/chevron-down.svg";
import {
  ItemWrapper,
  ItemContainer,
  ItemContent,
  ItemIcon,
  ContentsContainer,
  DateGap,
  ItemEditInput,
} from "./style";
import * as Helper from "../../utils/Helpers";
import useContextMenu from "../../hooks/useContextMenu";
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
  } = props;
  const [active, setActive] = useState(isActive);
  const [editStatus, setEditStatus] = useState(false);
  const [isNew, setIsNew] = useState(isNewPart);
  const [value, setValue] = useState(name);

  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);

  const changeActive = () => {
    // console.log(active);
    setActive(!active);
  };
  const editItem = () => {
    setEditStatus(id);
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
            console.log("unfolding");
            changeActive();
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
    if (enterPress && value.trim() !== "") {
      updateToDoName(id, value, isNew);
      setEditStatus(false);
      setIsNew(false);
      //   console.log("use");
    }
  }, [enterPress, escPress]);
  return (
    <ItemWrapper className={active ? "active to-do-item" : "to-do-item"}>
      <ItemContainer>
        {id !== editStatus && !isNew && (
          <ItemContent onDoubleClick={() => editItem()}>{value}</ItemContent>
        )}
        {(isNew || id === editStatus) && (
          <ItemContent>
            <ItemEditInput
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
            changeActive();
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

          {/* <DateGap>
            {startDate}-{endDate}
          </DateGap> */}
        </ContentsContainer>
      )}
    </ItemWrapper>
  );
};

export default ToDoItem;
