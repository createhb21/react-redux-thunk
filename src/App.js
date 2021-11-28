import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Subscribers from './components/Subscribers';
import store from './redux/store';
import Display from './components/Display';
import Views from './components/Views';
import Comments from './components/Comments';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Comments />
                <Subscribers />
                <Views />
                <Display />
            </div>
        </Provider>
    );
}

export default App;
