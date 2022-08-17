import styled from "styled-components";
import {
  assistColor,
  blackColor,
  grayColor,
  mainFont,
  whiteColor,
  grayMoreColor,
} from "../../styleVariable";

import check from "../../static/svg/check.svg";

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

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background: ${whiteColor};
  border-radius: 8px;
  gap: 12px;
  &.active {
    padding: 8px 16px 12px 16px;
  }
  transition: all 0.3s;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-items: center;
  height: 32px;
`;

export const ItemContent = styled.span`
  flex-grow: 1;
  font-family: ${mainFont};
  font-weight: 500;
  font-size: 20px;
  color: ${blackColor};
`;

export const ItemEditInput = styled.input`
  height: 100%;
  width: 90%;
`;

export const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  mask-image: url(${(props) => props.icon});
  background-color: ${grayMoreColor};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: ${blackColor};
    transition: all 0.5s;
  }
  &.active {
    transform: rotateX(180deg);
    transition: all 0.5s;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const ContentStatus = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border: 1px solid ${grayMoreColor};
  cursor: pointer;

  &.active {
    background: url(${check});
    background-size: cover;
  }
`;

export const Content = styled.span`
  flex-grow: 1;
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-left: 8px;
`;

export const DateGap = styled.span`
  font-family: ${mainFont};
  margin-left: 4px;
  font-weight: 400;
  font-size: 14px;
`;
