import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Jy from '../../../assets/jy.png';
import Ye from '../../../assets/ye.png';
import Hj from '../../../assets/hj.png';
import Je from '../../../assets/je.png';
import Kn from '../../../assets/kn.png';
import styled from 'styled-components';

export default function AboutUs() {
    const member = [
        {
            name: "이주연",
            part: "Front-End",
            email: "2191047@hansung.ac.kr",
            img: Jy
        },
        {
            name: "임예은",
            part: "Front-End",
            email: "2271514@hansung.ac.kr",
            img: Ye
        },
        {
            name: "임혜정",
            part: "Back-End",
            email: "2191233@hansung.ac.kr",
            img: Hj
        },
        {
            name: "김정은",
            part: "Back-End",
            email: "2211013@hansung.ac.kr",
            img: Je
        },
        {
            name: "권기남",
            part: "Designer",
            email: "rlska0711@hansung.ac.kr",
            img: Kn
        },
    ];

    useEffect(()=>{
        setTimeout(()=>{
            window.location.reload()
        },40000)
    },[])

    return (
        <ScrollContainer>
            <motion.div
                style={{ display: 'flex', gap: '5%', paddingLeft:'10%' }}
                animate={{ x: [0, -1500] }} //왼쪽에서 오른쪽으로 스크롤
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 10, //애니메이션 지속 시간
                        ease: "linear",
                    },
                }}
            >
                {member.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        part={item.part}
                        email={item.email}
                        img={item.img}
                    />
                ))}
            </motion.div>
        </ScrollContainer>
    );
}

const ScrollContainer = styled.div`
    width: 100%;
    overflow-x: hidden;  /* 가로 스크롤 감춤 */
    display: flex;
    justify-content: flex-start;
`;
