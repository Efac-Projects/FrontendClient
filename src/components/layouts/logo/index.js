import React from "react";
import styled from "styled-components";
import logo from '../../Images/logo.png'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 110px;
  height: 110px;

  img {
    width: 100%;
    height: 100%;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logo} alt="NoQueue logo" />
      </LogoImg>
   
    </LogoWrapper>
  );
}
