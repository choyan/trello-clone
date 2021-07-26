import { createContext, useReducer } from 'react';
import { Column, TopBar } from 'components';
import upsert from './utils/upsert';

export const ColumnContext = createContext();
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
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'columnAdd':
      return { ...state, columns: [...state.columns, action.data] };
    case 'columnDelete':
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.id),
        cards: state.cards.filter((card) => card.column !== action.id),
      };
    case 'columnEdit':
      upsert(state.columns, action.data);
      return {
        ...state,
      };
    case 'cardAdd':
      return { ...state, cards: [...state.cards, action.data] };
    case 'cardDelete':
      return { ...state, cards: state.cards.filter((card) => card.id !== action.id) };
    default:
      return state;
  }
};

export default function App() {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <ColumnContext.Provider value={{ data: data, dataDispatch: dispatch }}>
      <div className="bg-home-bg bg-cover h-screen w-full">
        <TopBar />
        <div className="container flex mx-auto gap-x-12 mt-8">
          {data.columns.map((column) => (
            <Column columnData={column} key={column.id} />
          ))}
        </div>
      </div>
    </ColumnContext.Provider>
  );
}
