import styled from 'styled-components';

const BackgroundImage = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-blend-mode: overlay;
background-repeat: no-repeat;
background-position: ${props => props.pos || "center"};
background-attachment: ${props => props.fixed && "fixed"};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: ${props => props.theme.bgDark};
color: ${props => props.theme.fgLight} !important;
padding: 60px 0;
height: ${props => props.height};
`;

export default BackgroundImage;
