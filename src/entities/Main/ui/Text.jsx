import React from 'react'
import styled from 'styled-components';
import './Text.css'

//이미지
import LOGO1 from '../../../assets/logo1.svg'
import LOGO2 from '../../../assets/logo2.svg'
import LOGO3 from '../../../assets/shimpyo.svg'
export default function Text() {
    return (
        <MainLayout>
            <Logo1Img src={LOGO1}/>
            <Logo2Img src={LOGO2}/>
            {/* <Logo3Img src={LOGO3}/> */}
            <Wrap>
                쉼표는 누가
                <div class="dropping-texts">
                    <div>개발했을까?</div>
                    <div>디자인했을까?</div>
                    <div>기획했을까?</div>
                    <div>만들었을까?</div>
                </div>
            </Wrap>
        </MainLayout>

    )
}

const MainLayout = styled.div`
height : 100vh;
display : flex;
justify-content : center;
align-items : center;
`;
const Wrap = styled.div`
margin-right : 10%;
`;
const Logo1Img = styled.img`
width : 15%;
position : absolute;
top : 10%;
left : 10%;
`;

const Logo2Img = styled.img`
width : 15%;
position : absolute;
bottom : 10%;
right : 10%;
`;


const Logo3Img = styled.img`
width : 15%;
position : absolute;
top : 40%;
left : 2%;
`;
