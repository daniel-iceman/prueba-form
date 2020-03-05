import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase'


firebase.firestore().collection('times').add({
  title: 'XX',
  time_seconds: '00',
})

function App() {
  return (
    <div className="App">
      <h1>Nuevo titulo</h1>
    </div>
  );
}

export default App;
