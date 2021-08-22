import React from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import Loader from './Components/Loader';
import Table from './Components/Table';
import DetailRowView from './Components/DetailRowView';
import ModeSelector from './Components/ModeSelector';
import TableSearch from './Components/TableSerch';
import Header from './Components/Header';

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [sortDirection, setSortDirection] = React.useState('asc'); // or 'desc'
  const [sortField, setSortField] = React.useState('id');
  const [row, setRow] = React.useState('');
  const [mode, setMode] = React.useState('');
  const [selectedPage, setSelectedPage] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch(mode)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(_.orderBy(response, sortField, sortDirection));
        setLoading(true);
      });
  }, [mode]);

  const onSort = (sortField) => {
    const clonedData = data.concat();
    const sortType = sortDirection === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(clonedData, sortField, sortType);

    setData(orderedData);
    setSortDirection(sortType);
    setSortField(sortField);
  };

  const searchHandler = (value) => {
    setSearchValue(value);
    setSelectedPage(0);
  };

  const pageChangeHandler = ({ selected }) => {
    setSelectedPage(selected);
  };

  const onRowSelect = (row) => {
    setRow(row);
  };

  const modeSelectHandler = (url) => {
    setMode(url);
  };

  const getFilteredData = () => {
    try {
      if (!searchValue) {
        return data;
      }
      return data.filter((item) => {
        return (
          item['firstName'].toLowerCase().includes(searchValue.toLowerCase()) ||
          item['lastName'].toLowerCase().includes(searchValue.toLowerCase()) ||
          item['email'].toLowerCase().includes(searchValue.toLowerCase()) ||
          item['phone'].toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!mode) {
    return (
      <div className="container">
        <ModeSelector onSelect={modeSelectHandler} />
      </div>
    );
  }

  let filteredData = getFilteredData();

  let pageSize = 50;

  const displayData = _.chunk(filteredData, pageSize)[selectedPage];
  console.log(displayData);

  return (
    <div className="container">
      <Header />

      {loading ? (
        <>
          <TableSearch onSearch={searchHandler} />
          <Table
            data={displayData}
            onSort={onSort}
            sortDirection={sortDirection}
            sortField={sortField}
            onRowSelect={onRowSelect}
          />
        </>
      ) : (
        <Loader />
      )}
      {data.length > pageSize && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(filteredData.length / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageChangeHandler}
          containerClassName={'pagination justify-content-center'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}
          forcePage={selectedPage}
        />
      )}
      {row && data ? <DetailRowView person={row} /> : null}
    </div>
  );
};

export default App;
