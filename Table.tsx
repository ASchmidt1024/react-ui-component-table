import * as React from 'react';

export interface TableElementProps {
  children?: React.ReactNode;
}

export interface TableContentElementProps {
  children?: React.ReactNode | string | number;
  tag?: string;
}

export const Table: React.FC<TableElementProps> = ({ children }) => <table className="a-table">{children}</table>;
Table.displayName = 'Table';

export const Head: React.FC<TableElementProps> = ({ children }) => <thead className="a-table__head">{children}</thead>;
Head.displayName = 'Head';

export const Body: React.FC<TableElementProps> = ({ children }) => <tbody className="a-table__body">{children}</tbody>;
Body.displayName = 'Body';

export const Foot: React.FC<TableElementProps> = ({ children }) => <tfoot className="a-table__foot">{children}</tfoot>;
Foot.displayName = 'Foot';

export const Row: React.FC<TableElementProps> = ({ children }) => <tr>{children}</tr>;
Row.displayName = 'Row';

export const Cell: React.FC<TableContentElementProps> = ({ children, tag = 'td' }) => {
  const CellTag = (tag as 'div') || 'td';
  return <CellTag className="a-table__cell">{children}</CellTag>;
};
Cell.displayName = 'Cell';
