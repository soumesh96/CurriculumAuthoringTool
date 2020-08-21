import React from 'react';

import { MainHeader, SubHeadingWrapper, ColumnWrapper, TextLabel } from './skins';


const HeaderCon = () => {
  return (
    <React.Fragment>
      <MainHeader>Mathematics</MainHeader>
      <SubHeadingWrapper jc="flex-start">
        <ColumnWrapper wid="10">
          <TextLabel fw="bold" fs="16">Actions</TextLabel>
          <TextLabel clr="#a9a9a9" fs="14">Move, Indent, Outdent, Delete</TextLabel>
        </ColumnWrapper>
        <ColumnWrapper wid="80">
          <TextLabel fw="bold" fs="16">Standard</TextLabel>
          <TextLabel clr="#a9a9a9" fs="14">The text of the standard</TextLabel>
        </ColumnWrapper>
      </SubHeadingWrapper>
    </React.Fragment>
  );
}

export default HeaderCon;
