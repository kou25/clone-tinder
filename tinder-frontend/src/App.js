import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useEffect, useMemo } from 'react'
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import axios from './axios'

function App() {
  const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPeople(req.data)
        }

        fetchData();
    },[])

    const childRefs = useMemo(() => Array(people.length).fill(0).map(i => React.createRef()))

  return (
    <div className="app">
      <Router>
        <Switch>
            <Route path="/chat/:person">
            <Header backButton="/chats"/>
              <ChatScreen/>
            </Route>
            <Route path="/chats">
            <Header backButton="/"/>
              <Chats/>
            </Route>
            <Route path="/">
              <Header/>
              <TinderCards childRefs={childRefs}/>
              <SwipeButtons childRefs={childRefs} people={people}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
