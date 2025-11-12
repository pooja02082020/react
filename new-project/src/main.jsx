import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './ReduxStore/Store.jsx'
import Storee from './ReduxToolKit/Storee.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store ={Storee}>
        <App />
    </Provider>

)
