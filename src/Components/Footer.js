import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterBtn>
            <button type="button">Proceed</button>
        </FooterBtn>
    )
}

export default Footer;

const FooterBtn = styled.div`
    display: flex;
    justify-content:center;
    >button{
        width:150px;
        height:30px;
       display: inline-block;
    text-decoration: none;
    border-radius:10px;
    color: white;
    background:#93329E;
    padding: 0.4rem 0.9rem;
    border: 3px solid purple;
  text-align: center;
    cursor: pointer;
    }
    >button:hover{
        background:transparent;
        color: #93329E;
    }
`;
