import React from 'react';
import ImgNText from '../atom/ImgNText';

const data1 = [
    {
        img       : "../img/21ho.jpg", 
        main_text : "New In : Museum of Peace & Quiet",
        sub_text  : "평온함과 고요함이 느껴지는 21HO 컬렉션",
    },
];

const data2 = [
    {
        img       : "../img/northwave.jpg", 
        main_text : "New In : Northwave",
        sub_text  : "아이코닉한 디자인의 슈즈브랜드",
    },
];

const NewCollection = () => {
    return (
        <div>
            <ImgNText props={data1}></ImgNText>
            <ImgNText props={data2}></ImgNText>
        </div>
    );
};

export default NewCollection;