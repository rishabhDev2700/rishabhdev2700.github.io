import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Button = styled(Link)`
padding:1rem 2rem;
margin:2rem;
font-family:'Bayon', sans-serif;
font-size:24px;
text-decoration:none;
min-width:8rem;
transition: all 0.2s ease-in-out;
font-weight: 100;
&:hover{
    transform: scale(1.05);
    box-shadow: 3px 3px 6px black ;
    color:darkblue;
}
`