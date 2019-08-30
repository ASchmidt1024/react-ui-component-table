import React from 'react';
import { Table, Head, Body, Foot, Row, Cell } from './Table';

export interface TableBuilderItem {
  [key: string]: React.ReactNode | string | number;
}

export interface TableBuilderModel {
  head?: TableBuilderItem[];
  body: TableBuilderItem[];
  foot?: TableBuilderItem[];
}

export const renderCells = (items: TableBuilderItem, location?: 'head' | 'foot') =>
  Object.keys(items).map(key => {
    console.log('renderCells key', items[key as any], location);
    return (
      <Cell tag={location === 'head' ? 'th' : undefined} key={key}>
        {items[key] as 'div'}
      </Cell>
    );
  });

export const renderRows = (items: TableBuilderItem[], location?: 'head' | 'foot') =>
  Object.keys(items).map(key => {
    console.log('renderRows key', items[key as any], location);
    return <Row key={key}>{renderCells(items[key as any], location)}</Row>;
  });

export const TableFromModel: React.FC<{ model: TableBuilderModel }> = ({ model }) => {
  return (
    <Table>
      {model.head && <Head>{renderRows(model.head, 'head')}</Head>}
      <Body>{renderRows(model.body)}</Body>
      {model.foot && <Foot>{renderRows(model.foot, 'foot')}</Foot>}
    </Table>
  );
};
