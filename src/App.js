import React from 'react';
import './App.css';

import TimesList from './components/times-list'
import AddTimesForm from './components/addTimesForm'

/*import firebase from './firebase' */


/*firebase.firestore().collection('times').add({
  title: 'XX',
  time_seconds: '00',
}) */

function App() {
  return (
    <div className="App">
      <h1>Nuevo titulo</h1>
      <TimesList />
      <AddTimesForm />
    </div>
  );
}

export default App;
