import dayjs from 'dayjs';
import { ColumnContext } from 'context';
import { useContext, useState } from 'react';
import { ModalCardEdit } from '../index';
import { Modal } from 'shared';

export default function Card({ cardData }) {
  const columnContext = useContext(ColumnContext);
  const [modalEditCardIsOpen, setModalEditCardIsOpen] = useState(false);
  const changeModalEditCardState = (state) => setModalEditCardIsOpen(state);

  const deleteCard = (id) => {
    columnContext.dataDispatch({
      type: 'cardDelete',
      id,
    });
  };

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

      <div className="flex gap-x-2 items-center">
        <div className="cursor-pointer" onClick={() => changeModalEditCardState(true)}>
          <svg
            className="fill-current text-sm text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
          </svg>
        </div>

        <div className="cursor-pointer" onClick={() => deleteCard(cardData.id)}>
          <svg
            className="fill-current text-sm text-red-600"
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

      <Modal open={modalEditCardIsOpen}>
        <ModalCardEdit changeModalEditCardState={changeModalEditCardState} cardData={cardData} />
      </Modal>
    </div>
  );
}
