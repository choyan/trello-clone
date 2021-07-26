import { useContext, useState } from 'react';
import { ColumnContext } from 'App';
import { ModalColumnEdit } from '../index';
import { Modal } from 'shared';

export default function Column({ columnData, cards, deleteCard }) {
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  const changeModalEditColumnState = (state) => setModalEditColumnIsOpen(state);
  const columnContext = useContext(ColumnContext);

  const deleteColumn = (id) => {
    columnContext.dataDispatch({
      type: 'columnDelete',
      id,
    });
  };

  const editColumn = () => {
    columnContext.dataDispatch({
      type: 'columnEdit',
    });
  };

  return (
    <div className="w-1/4 bg-gray-200 rounded-sm px-4 py-2.5">
      <div className="text-gray-800 flex justify-between">
        <div>{columnData.name}</div>
        <div className="cursor-pointer" onClick={() => deleteColumn(columnData.id)}>
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
          </svg>
        </div>

        <button onClick={() => changeModalEditColumnState(true)}>Edit</button>
      </div>

      <Modal open={modalEditColumnIsOpen}>
        <ModalColumnEdit
          changeModalEditColumnState={changeModalEditColumnState}
          columnData={columnData}
        />
      </Modal>

      {/*<div className="mt-8">*/}
      {/*  {columnCards.map((card) => (*/}
      {/*    <Card cardData={card} deleteCard={deleteCard} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}
