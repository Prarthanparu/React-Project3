import React from 'react';
import styled from 'styled-components';
import Guests from './Guests';

function Form() {
    return (
     <Container>
            <CardBody>
                <section>
                    <h4>Guest1 - Andy</h4>
                    <Guests/>
                </section>
                <section>
                    <h4>Guest1 - Andy</h4>
                    <Guests/>
                </section>
                <section>
                    <h4>Guest1 - Andy</h4>
                    <Guests/>
                </section>
                <section>
                    <h4>Guest1 - Andy</h4>
                    <Guests/>
                </section>

            </CardBody>
        </Container>
    )
}

export default Form;

const Container = styled.div`
display: flex;
flex-flow:wrap;
height: auto;
flex-direction: row;
padding:10px;
margin-top: 0;
justify-content: center;
`;


const CardBody = styled.div`
display: flex;
flex-direction:row;
padding:5px;
justify-content:center;
width:100%;
height:auto;
@media screen and (max-width:1200px){
    width:40%%;

}
@media screen and (max-width:600px){
    width:20%%;
    margin-left:5px;
    flex-direction:column;
}
>section{
>h4{
    color: #93329E;
    font-size:800;
    font-family: 'Poppins', sans-serif;
    margin-bottom:10px;
    margin-left:15px;
}
}


`;
