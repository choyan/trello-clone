import { useReducer } from 'react';
import { Column, MoveCard, TopBar } from 'components';
import { reducer } from './reducer';
import { ColumnContext } from 'context';

const initialState = {
  columns: [
    {
      id: 1,
      name: 'Ongoing',
    },
    {
      id: 2,
      name: 'In Review',
    },
    {
      id: 3,
      name: 'Completed',
    },
  ],
  cards: [
    {
      id: 1,
      name: 'Train Staff on POS',
      column: 1,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 2,
      name: 'Staffing Schedule',
      column: 1,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 3,
      name: 'Finalize the Menu',
      column: 1,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 4,
      name: 'Truck Signage',
      column: 2,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 5,
      name: 'Menu Testing',
      column: 2,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 6,
      name: 'Brooklyn Lunch',
      column: 2,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 7,
      name: 'File Permit Paperwork',
      column: 3,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
    {
      id: 8,
      name: 'Finalize Insurance',
      column: 3,
      date: 'Mon Jul 28 2021 11:31:42 GMT+0300 (GMT+03:00)',
    },
  ],
  selectedCard: {},
};

export default function App() {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <ColumnContext.Provider value={{ data: data, dataDispatch: dispatch }}>
      <div className="bg-home-bg bg-cover h-screen w-full">
        <TopBar />

        <section className="container mx-auto">
          <MoveCard />
        </section>

        <div className="container flex mx-auto gap-x-12 mt-8">
          {data.columns.map((column) => (
            <Column columnData={column} key={column.id} />
          ))}
        </div>
      </div>
    </ColumnContext.Provider>
  );
}
