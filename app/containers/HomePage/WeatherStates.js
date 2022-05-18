/* eslint-disable react/prop-types */
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {
  EmptyStateLabel,
  LoadingStateLabel,
  GridRowWrapper,
  GridRowLabel,
  GridRowAction,
  GridWrapper,
} from './Styles';

export const EmptyState = () => (
  <div>
    <EmptyStateLabel>No Results yet!</EmptyStateLabel>
    <EmptyStateLabel>Please use the search box above</EmptyStateLabel>
  </div>
);

export const LoadingState = () => (
  <>
    <LoadingOutlined style={{ fontSize: '25px' }} />
    <LoadingStateLabel>Loading</LoadingStateLabel>
  </>
);

const GridRow = ({ title, woeid, showDetailsCallback }) => (
  <GridRowWrapper>
    <GridRowLabel>{title}</GridRowLabel>
    <GridRowAction onClick={() => showDetailsCallback(woeid, title)}>
      See Details...
    </GridRowAction>
  </GridRowWrapper>
);

export const GridState = ({ items, showDetailsCallback }) => (
  <GridWrapper>
    {items.map(x => (
      <GridRow
        title={x.title}
        woeid={x.woeid}
        key={x.woeid}
        showDetailsCallback={showDetailsCallback}
      />
    ))}
  </GridWrapper>
);
