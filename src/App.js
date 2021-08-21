import React from 'react';
import _ from 'lodash';

import Loader from './Components/Loader';
import Table from './Components/Table';
import DetailRowView from './Components/DetailRowView';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [sortDirection, setSortDirection] = React.useState('asc'); // or 'desc'
  const [sortField, setSortField] = React.useState('id');
  const [row, setRow] = React.useState('');

  React.useEffect(() => {
    fetch(
      'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(true);
        setData(_.orderBy(response, sortField, sortDirection));
      });
  }, []);

  const onSort = (sortField) => {
    const clonedData = data.concat();
    const sortType = sortDirection === 'asc' ? 'desc' : 'asc';

    const orderedData = _.orderBy(clonedData, sortField, sortType);
    setData(orderedData);
    setSortDirection(sortType);
    setSortField(sortField);
  };

  const onRowSelect = (row) => {
    console.log(row);
    setRow(row);
  };

  return (
    <div className="container">
      {loading ? (
        <Table
          data={data}
          onSort={onSort}
          sortDirection={sortDirection}
          sortField={sortField}
          onRowSelect={onRowSelect}
        />
      ) : (
        <Loader />
      )}
      {row ? <DetailRowView person={row} /> : null}
    </div>
  );
};

export default App;
