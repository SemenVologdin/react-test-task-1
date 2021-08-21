import React from 'react';

const Table = ({ data, onSort, sortDirection, sortField, onRowSelect }) => {
  return (
    <table className="table table-striped" style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th onClick={onSort.bind(null, 'id')}>ID {sortField === 'id' ? sortDirection : null}</th>
          <th onClick={onSort.bind(null, 'firstName')}>
            First Name {sortField === 'firstName' ? sortDirection : null}
          </th>
          <th onClick={onSort.bind(null, 'lastName')}>
            Last Name {sortField === 'lastName' ? sortDirection : null}
          </th>
          <th onClick={onSort.bind(null, 'email')}>
            Email {sortField === 'email' ? sortDirection : null}
          </th>
          <th onClick={onSort.bind(null, 'phone')}>
            Phone {sortField === 'phone' ? sortDirection : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr onClick={onRowSelect.bind(null, item)} key={`${item.id}_${item.firstName}`}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
