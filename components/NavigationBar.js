import React from 'react';
import { Typography } from '@material-ui/core';
import logo from '../logo/logo_height.png';
import styled from "styled-components";

const NavigationWrapper = styled.div`
	height					: 60px;
	background-color: #EEEEEE;
`
const NavigationSubWrapper = styled.div`
	max-width 			: 1900px;
	margin	  			: 0px auto;
	height					: 100%;
	padding					: 0px 5px;
`
const ButtonWrapper = styled.div`
	display					: flex;
	align-items			: center;
  height					: 100%;
`

const ShopWrapper = styled.div`
  display					: flex;
  align-items			: center;
  height					: 100%;
  margin-right    : 300px;
`

const LoginWrapper = styled.div`
  display					: flex;
  align-items			: center;
  height					: 100%;
  margin-left     : 300px;
`
// 볼드 적용이 안돼
const MenuText = styled(Typography)`
	font-size				: 16px;
	font-weight 		: 1000; 
  color           : #000;
  padding         : 16px;
  &:hover {
    text-decoration: underline;
  }
`

const SaleText = styled(Typography)`
	font-size				: 16px;
	font-weight 		: 1000; 
  color           : red;
  padding         : 16px;
`

const LogoWrapper = styled.div`
	margin : 10px;
`

const NavigationBar = () => {
    return (
      <NavigationWrapper>
        <NavigationSubWrapper>
          <ButtonWrapper>
            <ShopWrapper>
              <MenuText>
                  Mens
              </MenuText>
              <MenuText>
                  Womens
              </MenuText>
              <MenuText>
                  Lifestyle
              </MenuText>
              <MenuText>
                  Skateshop
              </MenuText>
              <SaleText>
                  Sale
              </SaleText>
              <MenuText>
                  Brands
              </MenuText>
            </ShopWrapper>
              
            <LogoWrapper>
              <img alt="No" src={logo}/>
            </LogoWrapper>
            <LoginWrapper>
              <MenuText>
                  Search
              </MenuText>
              <MenuText>
                  Journal
              </MenuText>
              <MenuText>
                  Help
              </MenuText>
              <MenuText>
                  My Page
              </MenuText>
              <MenuText>
                  Login
              </MenuText>
              <MenuText>
                  Cart
              </MenuText>
            </LoginWrapper>
          </ButtonWrapper>
        </NavigationSubWrapper>
      </NavigationWrapper>
        
    );
};

export default NavigationBar;