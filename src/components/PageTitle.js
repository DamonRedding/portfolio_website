import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => props.small ? '2em' : '3em'};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => props.small ? '1.5rem 0 4.5rem 0' : '0 0 3rem 0'};
  line-height: 1.2;
  span {
    margin: 0 0 0 .25em;
    font-size: 1.5rem;
  }
  a {
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

`;

const PageTitle = (props) => {
  return (
    <Title small={props.small}>
      {props.children}
    </Title>
  )
}

export default PageTitle