import React from 'react';

const TableSearch = ({ onSearch }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="input-group mb-3 mt-3">
        <input type="text" className="form-control" value={value} onChange={handleChange} />
        <button
          className="btn btn-outline-secondary"
          id="button-addon2"
          onClick={() => {
            onSearch(value);
            setValue('');
          }}>
          Search
        </button>
      </div>
    </>
  );
};

export default TableSearch;
