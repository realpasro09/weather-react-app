/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Search } = Input;

const HeaderWrapper = styled.div`
  height: 200px;
  background-color: #f7ca5a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const SearchTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

function Header({ searchTerm, onChangeCallback, onSearchCallback }) {
  return (
    <HeaderWrapper>
      <SearchTitle>How is the Weather?</SearchTitle>
      <Search
        value={searchTerm}
        style={{ width: 400 }}
        placeholder="Search by city name"
        enterButton="GO"
        size="large"
        onChange={onChangeCallback}
        onSearch={onSearchCallback}
      />
    </HeaderWrapper>
  );
}

export default Header;
