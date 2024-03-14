
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import './App.css'
import Layout from 'pages/Layout/Layout'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route path="home" element={<Home/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
