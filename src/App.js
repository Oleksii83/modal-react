import './App.css';
import Modal from './Modal/Modal';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>Project</h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Modal
      </button>
      {showModal && (
        <Modal
          onCloseButtonClick={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
