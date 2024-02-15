import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header.jsx';
import FeedbackList from './Components/FeedbackList.jsx';
import FeedbackStats from './Components/FeedbackStats.jsx';
import FeedbackForm from './Components/FeedbackForm.jsx';
import About from './Pages/About.jsx';
import {FeedbackProvider} from './Context/FeedbackContext.js';
import AboutIcon from './Components/AboutIcon.jsx';

//i added build, and want to see if thats commited.

function App() {

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="Container">
                <Routes>
                    <Route exact path="/" element={<>
                        <FeedbackForm />
                        <FeedbackStats/>
                        <FeedbackList />
                        <p><a href="/about" style={{color: "white"}}>About</a></p>
                        <AboutIcon />
                    </>} />
                    <Route path="/about" element={<About />}/>
                </Routes>
            </div>
        </Router>
        </FeedbackProvider>
    );
}

export default App;
