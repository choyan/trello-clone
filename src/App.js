import { useState } from 'react';
import Modal from 'shared/Modal';

function App() {
  const [modalCreateColumnIsOpen, setModalCreateColumnIsOpen] = useState(false);
  const changeModalCreateColumnState = () => setModalCreateColumnIsOpen(!modalCreateColumnIsOpen);

  return <div className="container mx-auto">test</div>;
}

export default App;
