import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './component/contexProvider/Context.jsx'
import { Cartcontext } from './component/contexProvider/Cartcontext.jsx'
import Sellarcontext from './component/contexProvider/Sellarcontext.jsx'
import { Productcontext } from './component/contexProvider/Productcontext.jsx'
import { Paymentcontext } from './component/contexProvider/Paymentcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <Paymentcontext>
      <Productcontext>
        <Sellarcontext>
          <Cartcontext>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Cartcontext>
        </Sellarcontext>
      </Productcontext>
    </Paymentcontext>
  </Context>,
)
