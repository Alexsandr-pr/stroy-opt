
import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import cardAction from 'action/cardAction';
import 'swiper/css';
import basketAction from 'action/basketAction';
import MyProfile from 'pages/Cabinet/blocks/MyProfile';
import ChangeProfile from 'pages/Cabinet/blocks/ChangeProfile';
import MyOrder from 'pages/Cabinet/blocks/order/MyOrder';
import MyAdress from 'pages/Cabinet/blocks/adress/MyAdress';
import MyLikes from 'pages/Cabinet/blocks/MyLikes';
import ChangePassword from 'pages/Cabinet/blocks/ChangePassword';
import Logout from 'pages/Cabinet/blocks/Logout';
import OrderDetails from 'pages/Cabinet/blocks/order/MyOrderDetails';
import AdressEdit from 'pages/Cabinet/blocks/adress/AdressEdit';
import Signin from 'pages/Auth/blocks/Signin';


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
const Basket = lazy(() => import('components/Basket/Basket'))
const Home = lazy(() => import('pages/Home/Home'))
const Cabinet = lazy(() => import("pages/Cabinet/Cabinet"))


function App() {

    const dispatch = useDispatch()
    
    const basket = useSelector(store => store.basket.basket)
    useEffect(() => {
        dispatch(cardAction.getOneCardOnDb());
        dispatch(cardAction.getCardsOnCategory("660c727f8d83c7a45d8c7ab2"));
    }, []);

    const initialDataCart = JSON.parse(localStorage.getItem("basket")) || [];

    useEffect(() => {
        dispatch(basketAction.onInitBasket(initialDataCart))
    }, [])


    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    },[basket])
    return (
        <>
            <Routes>
                <Route  path="/" element={ <Layout />}>
                    
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

                    
                    <Route path="catalog/" element={<Catalog/>}>
                        <Route path=":page/:limit" element={<Catalog/>}/>
                    </Route>
                    <Route path="card" element={<CardPage/>}/>
                    <Route path="sales" element={<Sales/>}/>
                    <Route path="sales/sales_open" element={<SalesItemOpen/>}/>

                    <Route path="user/*" element={<Cabinet/>}>
                        <Route path="account" element={<MyProfile/>}/>
                        <Route path="profile" element={<ChangeProfile/>}/>
                        <Route path="order" element={<MyOrder/>}/>
                        <Route path="order/:id" element={<OrderDetails/>}/>
                        <Route path="adress/*" element={<MyAdress/>}/>
                        <Route path="adress/edit" element={<AdressEdit/>}/>
                        <Route path="likes" element={<MyLikes/>}/>
                        <Route path="password" element={<ChangePassword/>}/>
                        <Route path="logout" element={<Logout/>}/>
                    </Route>

                    <Route path="user/auth/*" element={<Cabinet/>}>
                        <Route path="sign-in" element={<Signin/>}/>
                    </Route>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="basket" element={<Basket/>}/>
                    <Route path="*" element={<PageNotFound/>}/>

                </Route>
            </Routes>
        </>
    )
}

export default App
