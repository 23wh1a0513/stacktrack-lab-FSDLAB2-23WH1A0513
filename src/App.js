import React from 'react';
import Home from './pages/Home';
import {BrowersRouter,Routes} from 'react-router-dom';
import studentList from './pages/StudentList';
import editStudent from './pages/editStudent';
import addstudent from './pages/addstudent'; 

function App() {
  return (
    <div>
      <Home />

      {}
    </div>
  );
}

export default App;
//Check status:
git status

Stage your modified files:
git add src/App.js

Or stage all changes:
git add .

Commit:
git commit -m "Describe your changes"

Push to the current branch:
git push
