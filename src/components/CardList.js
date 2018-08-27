import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }

`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
