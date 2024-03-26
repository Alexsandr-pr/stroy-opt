import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <ScrollToTop/>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
