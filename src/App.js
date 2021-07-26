import { useState } from 'react';
import { Column, TopBar } from 'components';

export default function App() {
  const [columns, setColumns] = useState([
    {
      name: 'Ongoing',
      date: 'Mon Jul 26 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'In Review',
      date: 'Mon Jul 27 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Completed',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
  ]);
  const [cards, setCards] = useState([
    {
      name: 'Train Staff on POS',
      column: 'Ongoing',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Staffing Schedule',
      column: 'Ongoing',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Finalize the Menu',
      column: 'Ongoing',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Truck Signage',
      column: 'In Review',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Menu Testing',
      column: 'In Review',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Brooklyn Lunch',
      column: 'In Review',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'File Permit Paperwork',
      column: 'Completed',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      name: 'Finalize Insurance',
      column: 'Completed',
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
  ]);

  const deleteColumn = (name) => {
    setColumns(columns.filter((column) => column.name !== name));
    setCards(cards.filter((card) => card.column !== name));
  };

  const deleteCard = (name) => {
    setCards(cards.filter((card) => card.name !== name));
  };

  return (
    <div className="bg-home-bg bg-cover h-screen w-full">
      <TopBar />
      <div className="container flex mx-auto gap-x-12 mt-8">
        {columns.map((column) => (
          <Column
            columnData={column}
            deleteColumn={deleteColumn}
            key={column.name}
            cards={cards}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
}
