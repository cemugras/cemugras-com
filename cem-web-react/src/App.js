import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import TopBar from './components/toolbar/topbar';

function App() {
    return (
        <Router>
            <div className="App">
                <TopBar />
                <Routes>
                    <Route path="/" element={<Navigate to="/tr/anasayfa" replace />} />
                    <Route path="/tr" element={<Navigate to="/tr/anasayfa" replace />} />
                    <Route path="/en" element={<Navigate to="/en/homepage" replace />} />

                    <Route path="/en/homepage" element={<Home lang="en" />} />
                    <Route path="/tr/anasayfa" element={<Home lang="tr" />} />

                    <Route path="*" element={<Navigate to="/tr/anasayfa" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
