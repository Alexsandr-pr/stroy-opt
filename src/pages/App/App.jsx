
import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';

import './App.css';

import Home from 'pages/Home/Home';
import Company from 'pages/Company/Company';
import News from 'pages/News/News';
import Order from 'components/OrderPage/Order/Order';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/company" element={<Company/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
