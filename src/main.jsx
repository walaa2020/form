
import { createRoot } from 'react-dom/client'
import './index.css'
import Preview from './pages/preview/Preview'
import FormData from './pages/formData/FormData'
import {Provider} from "react-redux"
import { store } from './store'
import AppRouterProvider from './providers/AppRouterProvider'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
<Provider store={store}>
     <AppRouterProvider />
     </Provider>
   

)
