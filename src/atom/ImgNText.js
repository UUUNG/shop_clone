import React from 'react';
import { Typography } from '@material-ui/core';
import styled from "styled-components";

const CollectionWrapper = styled.div`
    min-width               : 1120px;
    overflow                : hidden;
	height					: 600px;
    background-color        : #CCC;
    margin-left             : 50px;
`
const Image = styled.img`
    width                   : 48.6%;
    margin                  : 0 1.4% 0 0;
    display                 : block;
`
const MainText = styled(Typography)`
    font-size               : 20px;
    font-weight             : 600
    display                 : block;
`
const SubText = styled(Typography)`
    font-size               : 16px;
    display                 : block;
`

const ImgNText = (props) => {
    const { img, main_text, sub_text } = props;

    return (
        <CollectionWrapper>
            <Image alt={main_text} src={img}/>
            <MainText>
                {main_text}
            </MainText>
            <SubText>
                {sub_text}
            </SubText>
        </CollectionWrapper>
    );
};

export default ImgNText;