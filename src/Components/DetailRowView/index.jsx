import React from 'react';

const DetailRowView = ({ person }) => {
  return (
    <div>
      <h3>
        Выбран пользователь <b>{`${person.firstName} ${person.lastName}`}</b>
      </h3>
      <p>
        Описание:
        <br />
        <textarea defaultValue={person.description}></textarea>
      </p>
      <ul>
        <li>
          Адрес проживания: <b>{person.address.streetAddress}</b>
        </li>
        <li>
          Город: <b>{person.address.city}</b>
        </li>
        <li>
          Провинция/штат: <b>{person.address.state}</b>
        </li>
        <li>
          Индекс: <b>{person.address.zip}</b>
        </li>
      </ul>
    </div>
  );
};

export default DetailRowView;
