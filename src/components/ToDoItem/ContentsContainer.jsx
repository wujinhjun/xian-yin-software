import { useEffect, useRef, useState } from "react";

import { ContentWrapper, ContentStatus, Content, ContentInput } from "./style";

import useKeyPress from "../../hooks/useKeyPress";

const ContCentContainer = (props) => {
  const {
    id,
    isCompleted,
    content,
    isNewPart,
    updateTaskContent,
    changeComplete,
    deleteContent,
  } = props;
  const [value, setValue] = useState(content);
  //   const [completed, setCompleted] = useState(isCompleted);
  const [editStatus, setEditStatus] = useState(false);
  const [isNew, setIsNew] = useState(isNewPart);
  const node = useRef(null);
  const enterPress = useKeyPress(13);
  const escPress = useKeyPress(27);

  const editContent = () => {
    setEditStatus(id);
  };

  useEffect(() => {
    if (isNew) {
      setEditStatus(id);
    }
    if (enterPress && value.trim() !== "") {
      updateTaskContent(id, value);
      setEditStatus(false);
      setIsNew(false);
    }
    if (escPress) {
      setEditStatus(false);
      if (isNew) {
        deleteContent(id);
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
    <ContentWrapper>
      <ContentStatus
        onClick={() => changeComplete(id)}
        className={isCompleted ? "active" : ""}
      />
      {!isNew && !editStatus && (
        <Content
          onDoubleClick={() => editContent()}
          className={isCompleted ? "completed" : ""}
        >
          {value}
        </Content>
      )}
      {(isNew || editStatus === id) && (
        <Content>
          <ContentInput
            ref={node}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></ContentInput>
        </Content>
      )}
    </ContentWrapper>
  );
};

export default ContCentContainer;
