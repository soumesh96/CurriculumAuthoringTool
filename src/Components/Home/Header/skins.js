import styled from 'styled-components';
import FlexDiv from '../../Common/FlexDiv';

export const MainHeader = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #a9a9a9;
  color: #a9a9a9;
`;

export const SubHeadingWrapper = styled(FlexDiv)`
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid #a9a9a9;
`;

export const ColumnWrapper = styled.div`
  ${props => props.wid && `width: ${props.wid}%;`}
  &:last-child {
    margin-left: 10%;
  }
`;

export const TextLabel = styled.p`
  margin: 0;
  ${props => props.fw && `font-weight: ${props.fw};`}
  ${props => props.fs && `font-weight: ${props.fs}px;`}
  color: ${props => props.clr ? props.clr : '#191919'};
`;