import React from 'react';

import styled from 'styled-components';

import Heading from '../components/Heading';
import Divider from '../components/Divider';
import H2 from '../components/H2';
import Container from '../components/Container';

const FormBox = styled.form`
background-color: #fff;
padding: 60px 0px;
box-shadow: 5px 5px 20px #cccccc;
border-radius: 12px;
`;

const Input = styled.input`
display: block;
width: 100%;
margin-bottom: 10px;
border: 1px solid #ededed;
background-color: #ededed;
height: 40px;
padding: 20px;
`;

const Textarea = styled.textarea`
width: 100%;
margin-bottom: 10px;
border: 1px solid #ededed;
background-color: #ededed;
padding: 20px;
`;

const Button = styled.button`
border: none;
background: hsla(123, 100%, 36%, 1);
background: linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
background: -moz-linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
background: -webkit-linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00B609", endColorstr="#6DDE72", GradientType=1 );
color: ${props => props.theme.fgLight};
text-decoration: none;
border-radius: 30px;
padding: 17px 40px;
width: max-content;
cursor: pointer;
`;

      

export default function Form() {
    return (
        <FormBox onSubmit={handleSubmit} name="contact" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <Container>
                <Heading>
                    <H2 content="Send Us A Message" />
                    <Divider />
                </Heading>
                <p>
                    <Input type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
                </p>
                <p>
                    <Input type="email" name="email" placeholder="Email Address" aria-label="Email Address" />
                </p>
                <p>
                    <Textarea name="message" placeholder="Message" aria-label="Message" />
                </p>
                <p>
                    <Button type="submit" aria-label="Submit">Send Message</Button>
                </p>
            </Container>
        </FormBox>
    )
}
