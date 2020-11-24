import React from "react";
import randomColor from "randomcolor";
import styled, { keyframes } from "styled-components";
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  margin: 10em;
`;

const Char = styled.h1`
font-size: 10em,
margin: 0 5px;
color: ${(props) => props.color};
/* Animation */
animation: ${BounceAnimation} 3s linear infinite;
animation-delay: ${(props) => props.delay};
`;

export default function Loading(props) {
  const {gig, user} = props;
  const str = `Booking a ${gig.title} service with ${user.first_name} ${user.last_name}`;
  const arr = str.split("").map(char => ({char: char.toUpperCase(), color: randomColor({
    luminosity: 'bright',
    hue: "yellow",
    format: 'rgba',
    alpha: 0.7
 })}));
  return <Wrapper>
    {arr.map((char, index) => <Char delay={`${index/2}s`} color={char.color}>{char.char}</Char>)}
  </Wrapper>;
}
