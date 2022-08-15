import styled from "styled-components";

import {
  backColor,
  lightColor,
  whiteColor,
  mainFont,
  mainColor,
} from "../../styleVariable";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 82px;
  background: ${backColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  box-sizing: border-box;
`;

export const HeaderIconContainer = styled.div`
  margin: 0 24px;
  background: ${lightColor};
  border-radius: 22px;
  flex-shrink: 0;
  width: 80px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: ${whiteColor};
  font-family: "HYChengXingJ";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  margin-left: 98px;
`;

export const Slogan = styled.span`
  color: ${whiteColor};
  font-family: ${mainFont};
  font-weight: 600;
  font-size: 24px;
  height: 100%;
  line-height: 50px;
`;

export const UserHead = styled.div`
  width: 50px;
  height: 50px;
  background: ${mainColor};
  border-radius: 50%;
  position: absolute;
  right: 32px;
  line-height: 50px;
  text-align: center;
  color: ${whiteColor};
  font-size: 24px;
  font-family: ${mainFont};
`;
