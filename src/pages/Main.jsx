import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AboutUs from '../entities/Main/ui/AboutUs';
import Text from '../entities/Main/ui/Text';

export default function Main() {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsShow(true); 
        }, 5000);
    }, []);

    return (
        <MainLayout>
            {!isShow && <Text/> }
            {isShow && <AboutUs />} 
        </MainLayout>
    );
}

const MainLayout = styled.div`
`;
