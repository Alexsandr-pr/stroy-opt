
import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import cardAction from 'action/cardAction';
import 'swiper/css';
//import Home from 'pages/Home/Home';


//Если всключить ленивую загрузку этого компонента перестает работать слайдер на основной странице после главного блока
//import Company from 'pages/Company/Company';
//import News from 'pages/News/News';
//import Order from 'components/OrderPage/Order/Order';
//import Payment from 'components/OrderPage/Payment/Payment';
//import Refund from 'components/OrderPage/Refund/Refund';
//import Question from 'components/OrderPage/Question/Question';
//import Reviews from 'components/OrderPage/Reviews/Reviews';
//import ContactsPage from 'components/OrderPage/ContactsPage/ContactsPage';
//import NewsCardPage from 'components/NewsPage/NewsCardPage/NewsCardPage';
//import PageNotFound from 'pages/PageNotFound/PageNotFound';
//import Catalog from 'pages/Catalog/Catalog';
//import Sales from 'pages/Sales/Sales';
//import SalesItemOpen from 'pages/Sales/SalesItemOpen';
//import CardPage from 'pages/CardPage/CardPage';
//import Admin from 'pages/Admin/Admin';


const Admin = lazy(() => import('pages/Admin/Admin'))

const CardPage = lazy(() => import('pages/CardPage/CardPage'))

const SalesItemOpen = lazy(() => import('pages/Sales/SalesItemOpen'))

const Sales = lazy(() => import('pages/Sales/Sales'))

const Catalog = lazy(() => import('pages/Catalog/Catalog'))

const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'))

const NewsCardPage = lazy(() => import('components/NewsPage/NewsCardPage/NewsCardPage'))

const ContactsPage = lazy(() => import('components/OrderPage/ContactsPage/ContactsPage'))

const Reviews = lazy(() => import('components/OrderPage/Reviews/Reviews'))

const Question = lazy(() => import('components/OrderPage/Question/Question'))


const Refund = lazy(() => import('components/OrderPage/Refund/Refund'))

const Payment = lazy(() => import('components/OrderPage/Payment/Payment'))

const Order = lazy(() => import('components/OrderPage/Order/Order'))
const News = lazy(() => import('pages/News/News'))
const Company = lazy(() => import('pages/Company/Company'))


const Home = lazy(() => import('pages/Home/Home'))

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cardAction.getCardsOnDb())
        dispatch(cardAction.getOneCardOnDb())
    }, [])
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


                    <Route path="admin" element={<Admin/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
