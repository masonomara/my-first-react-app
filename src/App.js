import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowsers' live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  
  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">

      <Title title="Events in Your area"/>

      {showEvents && (
        <>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </>
      )}
      {!showEvents && (
        <>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}

      {showModal && <Modal handleClose={handleClose}>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>}

    </div>
  );
}

export default App;