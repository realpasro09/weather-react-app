/* eslint-disable react/prop-types */
import React, { memo, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Header from 'components/Header';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeGetWeatherData,
  makeGetWeatherDetail,
  makeSelectLoading,
} from 'containers/HomePage/selectors';

import { Modal } from 'antd';
import { CloseCircleOutlined, CloudFilled } from '@ant-design/icons';
import {
  ResultSection,
  AltResultSection,
  ModalWrapper,
  ModalHeader,
  ModalHeaderLabel,
  ModalHeaderTitle,
  ModalBody,
  WeatherUnit,
  WeatherTypeLabel,
  ModalFooter,
  ModalNote,
  WeatherType,
} from './Styles';
import { EmptyState, LoadingState, GridState } from './WeatherStates';
import {
  changeSearchTerm,
  getWeatherData,
  changeWoeid,
  getWeatherDetail,
} from './actions';

import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  loading,
  setWoeid,
  weatherData,
  weatherDetail,
  getWeatherDataValue,
  getWeatherDetailValue,
  onChangeSearchTerm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [searchTermValue, setSearchTermValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('San Francisco');

  useEffect(() => {
    const isEmpty = Object.keys(weatherDetail).length === 0;
    if (!isEmpty) {
      setShowModal(true);
    }
  }, [weatherDetail]);

  const onSearchChange = x => {
    setSearchTermValue(x.target.value);
    onChangeSearchTerm(x.target.value);
  };
  const onSearchClick = () => {
    getWeatherDataValue(searchTermValue);
  };

  const showDetailsCallback = (woeid, title) => {
    setWoeid(woeid);
    setSelectedItem(title);
    getWeatherDetailValue(woeid);
  };

  return (
    <>
      <Header
        searchTerm={searchTermValue}
        onChangeCallback={x => onSearchChange(x)}
        onSearchCallback={() => onSearchClick()}
      />
      {!loading && weatherData && weatherData.length > 0 && (
        <ResultSection>
          <GridState
            items={weatherData}
            showDetailsCallback={showDetailsCallback}
          />
        </ResultSection>
      )}
      {(!loading || !weatherData || weatherData.length === 0) && (
        <AltResultSection>
          <EmptyState />
        </AltResultSection>
      )}
      {loading && (
        <AltResultSection>
          <LoadingState />
        </AltResultSection>
      )}

      <Modal width="70%" visible={showModal} closable={false} footer={null}>
        <ModalWrapper>
          <ModalHeader>
            <ModalHeaderLabel>{selectedItem}</ModalHeaderLabel>
            <CloseCircleOutlined
              style={{ fontSize: 30 }}
              onClick={() => setShowModal(false)}
            />
          </ModalHeader>
          <ModalHeaderTitle>Today</ModalHeaderTitle>
          <ModalBody>
            <WeatherUnit>{`${Math.trunc(
              weatherDetail.the_temp,
            )} C`}</WeatherUnit>
            <WeatherType>
              <CloudFilled style={{ fontSize: 80, color: '#badefb' }} />
              <WeatherTypeLabel>
                {weatherDetail.weather_state_name}
              </WeatherTypeLabel>
            </WeatherType>
          </ModalBody>
          <ModalFooter>{`Min: ${Math.trunc(
            weatherDetail.min_temp,
          )} C | Max: ${Math.trunc(weatherDetail.max_temp)} C`}</ModalFooter>
          <ModalNote>{`${Math.trunc(
            weatherDetail.wind_direction,
          )} mph`}</ModalNote>
        </ModalWrapper>
      </Modal>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  weatherData: makeGetWeatherData(),
  weatherDetail: makeGetWeatherDetail(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchTerm: term => dispatch(changeSearchTerm(term)),
    setWoeid: woeid => dispatch(changeWoeid(woeid)),
    getWeatherDataValue: term => dispatch(getWeatherData(term)),
    getWeatherDetailValue: woeid => dispatch(getWeatherDetail(woeid)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
