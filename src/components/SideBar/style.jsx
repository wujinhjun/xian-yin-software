import styled from "styled-components";
import {
  backColor,
  lightColor,
  mainColor,
  mainFont,
  whiteColor,
} from "../../styleVariable";

export const SideWrapper = styled.div`
  box-sizing: border-box;
  width: 128px;
  height: 100%;
  position: fixed;
  top: 82px;
  bottom: 0;
  background: ${backColor};
  display: flex;
  flex-direction: column;
`;

export const SideButtonList = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  flex: 1;
`;

export const SideButtonWrapper = styled.div`
  border: 1px solid ${lightColor};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 8px 16px;
  margin: 0 auto;
  margin-top: 24px;
  height: 44px;
  width: 114px;
  background: ${backColor};
  &:hover {
    background: ${mainColor};
  }
  &.active {
    background: ${mainColor};
  }

  cursor: pointer;
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
