import React, {Component} from 'react';


import Navbar from './components/Navbar';
import MainPage from './components/MainPage/MainPage';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <MainPage/>
            </div>
        );
    }
}

export default App;
