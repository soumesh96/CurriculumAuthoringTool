import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import { ButtonWrapper, AddStandardBtn, IconWrapper } from './skins';

const AddStandard = (props) => {
  const { addStandard } = props;
  return (
    <React.Fragment>
      <ButtonWrapper>
        <AddStandardBtn
          onClick={addStandard}
        >
           <IconWrapper icon={faPlus} />
          Add a Standard
        </AddStandardBtn>
      </ButtonWrapper>
    </React.Fragment>
  );
}

export default AddStandard;
