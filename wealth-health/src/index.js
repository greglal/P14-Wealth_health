import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import './Styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header'
import Home from './Pages/Home'
import List from './Pages/List'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/list" element={<List/>} />
              </Routes>
          </Provider>
      </Router>
  </React.StrictMode>
);


