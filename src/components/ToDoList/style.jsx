import styled from "styled-components";
import {
  assistColor,
  blackColor,
  grayColor,
  mainFont,
} from "../../styleVariable";

export const ToDoListWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 260px;
  display: flex;
  flex-direction: column;
  background-color: ${grayColor};
  border-radius: 16px 16px 0 0;
  box-sizing: border-box;
  padding: 24px 16px;
  height: fit-content;
  overflow: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 16px;
  height: 54px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 36px;
  cursor: pointer;
`;

export const Title = styled.div`
  flex-grow: 1;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${blackColor};
`;

export const NumberCircle = styled.div`
  flex-grow: 0;
  background: ${assistColor};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  aspect-ratio: 1;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
`;

export const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  height: 32px;
  background: ${assistColor};
  border-radius: 8px;
  cursor: pointer;
`;

export const AddIcon = styled.div`
  background: url(${(props) => props.icon});
  width: 24px;
  aspect-ratio: 1;
`;

export const ItemList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;
