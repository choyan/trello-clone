import dayjs from 'dayjs';
import { ColumnContext } from 'App';
import { useContext } from 'react';

export default function Card({ cardData, deleteCard }) {
  const columnContext = useContext(ColumnContext);
  const selectCard = (data) => {
    columnContext.dataDispatch({
      type: 'changeSelectedCard',
      data,
    });
  };

  return (
    <div
      className={`bg-white rounded-sm px-2.5 py-1.5 mb-2.5 flex items-center justify-between cursor-pointer ${
        columnContext.data.selectedCard.id === cardData.id && 'border-2 border-blue-500'
      }`}
      onClick={() => selectCard(cardData)}
    >
      <div>
        <div>{cardData.name}</div>
        <div className="mt-2 text-gray-400 text-sm">{dayjs(cardData.date).format('MMMM D')}</div>
      </div>

      <div className="cursor-pointer" onClick={() => deleteCard(cardData.id)}>
        <svg
          className="fill-current text-sm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z" />
        </svg>
      </div>
    </div>
  );
}
