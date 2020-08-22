import styled from 'styled-components';
import FlexDiv from '../../Common/FlexDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconWrapper = styled(FontAwesomeIcon)`
  font-size: 18px;
  cursor: pointer;
  position: relative;
  ${props => props.disabled && 'opacity: 0.5; cursor: not-allowed;'}
  &:hover {
    color: #3cc1c5;

		&:after {
			content: "DDDDD";
			background: #333;
			color: #fff;
			font-size: 10px;
			padding: 5px;
			position: absolute;
			top: -25px;
			left: -5px;
		}
  }
`;

export const InputWrapper = styled(FlexDiv)`
  margin-left: 10%;
  ${props => props.marLeft && `margin-left: ${props.marLeft}%;`}
  width: ${props => props.marLeft ? `${100 - props.marLeft -15}` : '75'}%;
  background: white;
`;

export const RowInput = styled.input`
  width: 60%;
  padding: 10px 6px;
  border: none;
  margin-left: 10%;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    cursor: text;
  }
  ${props => props.textClr ? `color: ${props.textClr}; font-weight: bold;` : 'color: #5b6469; font-weight: 500;'}
`;

export const StandardRowCon = styled.div`
  border-bottom: 1px solid #a9a9a9;
  background: #f1f1f1;
  display: flex;
  justify-content: flex-start;
  align-item: center;
  height: 5vh;
  width: 100%;
`;

export const IconGroupCon = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  background: white;
  align-items: center;
`;
