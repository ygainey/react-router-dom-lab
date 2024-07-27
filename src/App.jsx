import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetail/MailboxDetail';
import './App.css'

const testMailBox = {
  _id: 0,
  boxSize: 'test',
  boxHolder: 'test',
}

const App = () => {

  const [mailBoxes, setMailBoxes] = useState([testMailBox])

  const addMailBox = (newMailBoxData) => {
    newMailBoxData._id = mailBoxes.length + 1;
    setMailBoxes([...mailBoxes, newMailBoxData])
  }

  return ( 
    <>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailBoxes={mailBoxes} /> }/>
        <Route path="/mailboxes/:mailId" element={<MailboxDetails mailBoxes={mailBoxes}/> }/>
        <Route path="/new-mailbox" element={<MailboxForm addMailBox={addMailBox}/> }/>
      </Routes>
    </>
  )
};

export default App;

