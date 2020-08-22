import React, { useState } from 'react';
import styled from 'styled-components';

const ToolTipWrapper = styled.span`
  position: relative;
`;

const ToolTipContentWrapper = styled.div`
  min-width: 60px;
  max-width: 200px;
  position: absolute;
  z-index: 10;
  &:after {
    content: '';
    position: absolute;
  }
  ${props => props.position === 'top' &&
  `
  bottom: 100%;
  left: 50%;
  padding-bottom: 9px;
  transform: translateX(-50%);
  
  &:after {
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid rgba(0,0,0,.7);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

const ToolTipMsg = styled.div`
  background: rgba(0,0,0,.7);
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  padding: 8px;
  text-align: center;
`; 

const ToolTip = (props) => {
  const { message, position, isVisibleToolTip } = props;
  const [showToolTip, setShowToolTip] = useState(false);

  const showToolTipHandler = () => {
    setShowToolTip(true);
  }

  const hideToolTipHandler = () => {
    setShowToolTip(false);
  }

  return (
    <ToolTipWrapper
      onMouseLeave={hideToolTipHandler}
    >
      {showToolTip && isVisibleToolTip &&
      (
        <ToolTipContentWrapper position={position}>
          <ToolTipMsg>{message}</ToolTipMsg>
        </ToolTipContentWrapper>
      )
      }
      <span
        onMouseOver={showToolTipHandler}
      >
        {props.children}
      </span>
    </ToolTipWrapper>
  );
}

export default ToolTip;
