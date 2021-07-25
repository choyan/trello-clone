import { useState } from 'react';
import Modal from 'shared/Modal';

function App() {
  const [modalCreateColumnIsOpen, setModalCreateColumnIsOpen] = useState(false);
  const changeModalCreateColumnState = () => setModalCreateColumnIsOpen(!modalCreateColumnIsOpen);

  return (
    <div className="container mx-auto">
      <button onClick={changeModalCreateColumnState}>Open Modal</button>
      <Modal
        changeModalCreateColumnState={changeModalCreateColumnState}
        open={modalCreateColumnIsOpen}
      >
        <h1>Notify Me</h1>
        <button onClick={changeModalCreateColumnState}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
