import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './component/contexProvider/Context.jsx'
import { Cartcontext } from './component/contexProvider/Cartcontext.jsx'
import Sellarcontext from './component/contexProvider/Sellarcontext.jsx'
import { Productcontext } from './component/contexProvider/Productcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <Productcontext>
      <Sellarcontext>
        <Cartcontext>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Cartcontext>
      </Sellarcontext>
    </Productcontext>
  </Context>,
)
