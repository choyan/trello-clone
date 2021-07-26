import { Modal } from 'shared';
import { useState } from 'react';
import { ModalColumnAdd } from '../index';

export default function TopBar() {
  const [modalCreateColumnIsOpen, setModalCreateColumnIsOpen] = useState(false);
  const changeModalCreateColumnState = (state) => setModalCreateColumnIsOpen(state);

  return (
    <div className="py-4 bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" />
          </svg>
        </div>
        <div>
          <div className="flex cursor-pointer" onClick={() => changeModalCreateColumnState(true)}>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2h4z" />
            </svg>
            Add Column
          </div>
        </div>
      </div>

      <Modal open={modalCreateColumnIsOpen}>
        <ModalColumnAdd changeModalCreateColumnState={changeModalCreateColumnState} />
      </Modal>
    </div>
  );
}
