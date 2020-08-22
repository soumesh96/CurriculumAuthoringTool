import styled from 'styled-components';
import FlexDiv from '../Common/FlexDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomeCon = styled.div`
  width: 90%;
  margin: 6% auto;
`; 

export const IconWrapper = styled(FontAwesomeIcon)`
  font-size: 18px;
  cursor: pointer;
  position: relative;
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