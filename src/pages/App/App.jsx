
import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';



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
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Catalog from 'pages/Catalog/Catalog';
import Sales from 'pages/Sales/Sales';
import SalesItemOpen from 'pages/Sales/SalesItemOpen';
import CardPage from 'pages/CardPage/CardPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="company" element={<Company/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="news/newsitem" element={<NewsCardPage/>}/>
                    <Route path="order" element={<Order/>}/>

                    <Route path="payment" element={<Payment/>}/>
                    <Route path="refund" element={<Refund/>}/>
                    <Route path="question" element={<Question/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="contact" element={<ContactsPage/>}/>

                    <Route path="catalog" element={<Catalog/>}/>
                    <Route path="card/*" element={<CardPage/>}/>
                    <Route path="sales" element={<Sales/>}/>
                    <Route path="sales/sales_open" element={<SalesItemOpen/>}/>

                    <Route path="*" element={<PageNotFound/>}/>

                </Route>
            </Routes>
        </>
    )
}

export default App
