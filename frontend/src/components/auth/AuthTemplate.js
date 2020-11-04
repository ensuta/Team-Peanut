import React from 'react';
import styled from 'styled-components';
import palatte from '../../libs/styles/palette';
import { Link } from 'react-router-dom'; 

const AuthTemplateBlock = styled.div`
    position : absolute;
    left : 0;
    top : 0;
    right : 0;
    bottom : 0;
    background : ${palatte.gray[2]};
`;

const AuthTemplate = ({children}) => {
    return(
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    )
}

export default AuthTemplate;