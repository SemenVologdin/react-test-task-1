import React from 'react';

import './style.css';

const Table = ({ data, onSort, sortDirection, sortField, onRowSelect }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="title-table">
          <th onClick={onSort.bind(null, 'id')}>
            ID {sortField === 'id' ? (sortDirection === 'asc' ? '▲' : '▼') : ' '}
          </th>
          <th onClick={onSort.bind(null, 'firstName')}>
            First Name {sortField === 'firstName' ? (sortDirection === 'asc' ? '▲' : '▼') : ' '}
          </th>
          <th onClick={onSort.bind(null, 'lastName')}>
            Last Name {sortField === 'lastName' ? (sortDirection === 'asc' ? '▲' : '▼') : ' '}
          </th>
          <th onClick={onSort.bind(null, 'email')}>
            Email {sortField === 'email' ? (sortDirection === 'asc' ? '▲' : '▼') : ' '}
          </th>
          <th onClick={onSort.bind(null, 'phone')}>
            Phone {sortField === 'phone' ? (sortDirection === 'asc' ? '▲' : '▼') : ' '}
          </th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((item) => (
            <tr onClick={onRowSelect.bind(null, item)} key={`${item.id}_${item.firstName}`}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))
        ) : (
          <h2 className="position-absolute top-50 start-50 translate-middle">Data not found :(</h2>
        )}
      </tbody>
    </table>
  );
};

export default Table;
