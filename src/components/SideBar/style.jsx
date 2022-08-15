import styled from "styled-components";
import {
  backColor,
  lightColor,
  mainColor,
  mainFont,
  whiteColor,
} from "../../styleVariable";

export const SideContainer = styled.div`
  width: 128px;
  flex-grow: 0;
`;

export const SideWrapper = styled.div`
  width: 128px;
  box-sizing: border-box;
  position: absolute;
  top: 82px;
  bottom: 0;
  background: ${backColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* flex: 1; */
  flex-grow: 0;
`;

export const SideButtonList = styled.div`
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 24px;
`;

export const SideBottom = styled.div`
  position: relative;
  bottom: 24px;
`;

export const SideButtonWrapper = styled.div`
  border: 1px solid ${lightColor};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 8px 16px;
  margin: 0 auto;
  /* margin-top: 24px; */
  height: 44px;
  width: 114px;
  background: ${backColor};
  cursor: pointer;
  &:hover {
    background: ${mainColor};
  }
  &.active {
    background: ${mainColor};
  }
`;

export const ButtonIcon = styled.div`
  background: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const ButtonTitle = styled.span`
  font-family: ${mainFont};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${whiteColor};
`;
