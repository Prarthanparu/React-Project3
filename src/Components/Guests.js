import React from 'react';
import styled from 'styled-components';

function Guests() {
    return (
            <CardContent>
                    <section>
                            <label for="type">Choose Identification Type</label>
                            {/* select can be used but I dont think aadhar cards have an option to select from so I am using an input */}
                            {/* <select name="Aadhar Card" id="card" placeholder="Aadhar Card"></select> */}
                            <input type="text" name="aadhar" id="card" placeholder="Aadhar Card"/>
                            <input type="text" placeholder="Enter your 12 digits Aadhar Number" />
                    </section>
                    <section>
                        <label for="type">State</label>
                        <input type="text" placeholder="Maharastra" />
                    </section>
                    <section>
                            <label for="type">Country</label>
                            <input type="text" placeholder="India" />   
                    </section>
                    <section>
                            <label for="type">Meal Type</label>
                            <input type="text" placeholder="Choose Meal Type" />
                    </section>
            </CardContent>
    )
}

export default Guests;


const CardContent = styled.div`
width:400px;
display: flex;
flex-direction:column;
height:auto;
padding:10px;

font-family: 'Poppins', sans-serif;

@media screen and (max-width:600px){
    width:300px;
    margin-left:5px;
    
}
>section{
    display: flex;
    flex-direction:column;
>label{
    padding:2px;
    font-size:14px;
    font-weight: 500;
    color: #93329E;
}
>input{
    padding:9px;
    margin-bottom:10px;
   border:1px solid #DDDD;
    border-radius:10px;
}
}

`;
