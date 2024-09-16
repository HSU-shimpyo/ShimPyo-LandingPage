import React from 'react'
import styled from 'styled-components';

//이미지
import LOGO from '../../../assets/logo.png'
import EMAIL from '../../../assets/email.png'
import SUM from '../../../assets/aboutusSum.png'
export default function Card({ name, email, img, part, marginLeft }) {
    return (
        <MainLayout>
            <TopCard>

                <WrapRound>
                        <Round padding="4px 14px 4px 14px">
                            {part}
                        </Round>

                        <Round width="50px" height="50px">
                            <LogoImg src={LOGO} />
                        </Round>
                </WrapRound>
                <Img src={img} />
            </TopCard>

            <BottomCard>
                <StyledText fontSize="60px" margin="5% 0px 5% 5%" fontWeight='600' >{name}</StyledText>
                <WrapEmail>
                    <EmailImg src={EMAIL} width="20px" height="20px" />
                    <StyledText fontWeight='600'>E-mail</StyledText>
                </WrapEmail>
                <StyledText margin="0 0 0 5%">{email}</StyledText>
                <SumImg src={SUM} />
            </BottomCard>
        </MainLayout>
    )
}

const MainLayout = styled.div`
height : 100vh;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
`;

const StyledText = styled.div`
color: ${({ color }) => color || '#fff'};
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '30px'};
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '400'};
letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
margin :  ${({ margin }) => margin || '0px'};
`;
const TopCard = styled.div`
width : 600px;
height : 700px;
background-color : #3C63EC;
border-radius : 35px;
align-items : center;
justify-content : space-between;
border-bottom: 1px inset rgba(255, 255, 255, 0.50);
`;

const WrapRound = styled.div`
display : flex;
justify-content : space-between;
padding : 5%
`;
const Round = styled.div`
width : ${({ width }) => width || '150px'};
height : ${({ height }) => height || '50px'};
background-color : #F7F7FB;
border-radius : 100px;
padding : ${({ padding }) => padding || '6px'};
color: #3C63EC;
font-family: Pretendard;
font-size: 25px;
font-style: normal;
font-weight: 800;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
display : flex;
justify-content : center;
align-items : center;
`;

const BottomCard = styled.div`
width : 600px;
height : 250px;
background-color : #3C63EC;
border-radius : 35px;
display : flex;
flex-direction :column;
justify-content : space-around;
`;

const LogoImg = styled.img`
width : 40px;
height : 40px;
margin-left : 10%;
`;

const EmailImg = styled.img`
width : 30px;
height : 30px;
padding-right : 2%;
`;

const SumImg = styled.img`
width : 200px;
height : 230px;
position : relative;
left : 66.7%;
bottom : 67%;
`;

const Img = styled.img`
width : 500px;
height : 500px;
margin-left : 8%;
`;

const WrapEmail = styled.div`
display : flex;
padding-left : 5%;
`