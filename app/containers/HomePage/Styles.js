import styled from 'styled-components';

export const ModalHeaderLabel = styled.div`
  font-size: 18px;
  color: #4c4c4c;
`;
export const ModalHeaderTitle = styled.div`
  font-size: 22px;
  color: gray;
  font-weight: bold;
  text-align: center;
  width: 70%;
  align-self: center;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 25%;
  padding-right: 25%;
  align-items: center;
  margin-top: 30px;
`;
export const WeatherUnit = styled.div`
  color: gray;
  font-size: 40px;
  margin-right: 25px;
`;

export const WeatherType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 40px;
  margin-left: 25px;
`;

export const WeatherTypeLabel = styled.div`
  color: gray;
  font-size: 18px;
  text-align: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: gray;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ModalNote = styled.div`
  color: gray;
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
`;

export const ResultSection = styled.div`
  min-height: 400px;
  margin: 250px 50px 30px 50px;
  box-shadow: 0px 0px 4px #888888;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AltResultSection = styled.div`
  min-height: 400px;
  margin: 250px 50px 30px 50px;
  box-shadow: 0px 0px 4px #888888;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateLabel = styled.div`
  color: #a7a7a7;
  margin-bottom: 10px;
  text-align: center;
`;
export const LoadingStateLabel = styled.div`
  color: #4c4c4c;
  margin-top: 20px;
  font-size: 20px;
`;

export const GridRowLabel = styled.div`
  color: #4c4c4c;
  font-size: 18px;
`;
export const GridRowAction = styled.div`
  color: #6991c5;
  font-size: 14px;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: baseline;
`;
export const GridRowWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 40px 25px 40px;
  border-bottom: 1px solid #a7a7a7;
`;
