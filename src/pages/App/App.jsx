
import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';

import './App.css';

import Home from 'pages/Home/Home';
import Company from 'pages/Company/Company';
import News from 'pages/News/News';
import Order from 'components/OrderPage/Order/Order';
import Payment from 'components/OrderPage/Payment/Payment';
import Refund from 'components/OrderPage/Refund/Refund';
import Question from 'components/OrderPage/Question/Question';
import Reviews from 'components/OrderPage/Reviews/Reviews';
import ContactsPage from 'components/OrderPage/ContactsPage/ContactsPage';
import NewsCardPage from 'components/NewsPage/NewsCardPage/NewsCardPage';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/company" element={<Company/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/news/newsitem" element={<NewsCardPage/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/payment" element={<Payment/>}/>
                    <Route path="/refund" element={<Refund/>}/>
                    <Route path="/question" element={<Question/>}/>
                    <Route path="/reviews" element={<Reviews/>}/>
                    <Route path="/contact" element={<ContactsPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
