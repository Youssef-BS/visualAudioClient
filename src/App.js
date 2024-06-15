import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainHeader from './components/search';
import Footer from './components/footer/Footer';
import HeaderComponent from './components/header/Header';
import InfoBar from './components/endHeader/endHeader';
import AllNews from './components/newsroom/AllNews';
import Explore from './components/Explore/Explore';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import CreateAccountForm from './Pages/CreateAcount';
import ImageMapperContainer from './Pages/ProjectSelector';
import ProductDetail from './Pages/ProductDetails';
import ContactUs from './Pages/ContactUs';
import Support from './Pages/Support';
import AllNewsRoom from './Pages/AllNews';





    const Layout = ({ children }) => {
        return (
            <>
                <HeaderComponent />
                <MainHeader />
                <InfoBar />
                {children}
                <Footer />
            </>
        );
    };
    const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Layout><Home /></Layout>}
                />
                <Route
                    path="/projects"
                    element={<Layout><Projects /></Layout>}
                />
                <Route
                    path="/create-account"
                    element={<Layout><CreateAccountForm /></Layout>}
                />
                <Route
                    path="/project-select"
                    element={<Layout><ImageMapperContainer /></Layout>}
                />
                <Route
                    path="/explore"
                    element={<Layout><Explore /></Layout>}
                />
                <Route
                    path="/ProductDetail/:id"
                    element={<Layout><ProductDetail /></Layout>}
                />
                <Route
                    path="/CntactsUs"
                    element={<Layout><ContactUs /></Layout>}
                />
                <Route
                    path="/Support"
                    element={<Support />}
                />
                <Route
                    path="/AllNews"
                    element={<Layout><AllNews /></Layout>}
                />
            </Routes>
        </Router>
    );
};

export default App;
