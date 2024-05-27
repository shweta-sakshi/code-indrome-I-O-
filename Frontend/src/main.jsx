import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './component/contexProvider/Context.jsx'
import { Productcontext } from './component/contexProvider/Productcontext.jsx'
import Sellarcontext from './component/contexProvider/Sellarcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <Sellarcontext>
      <Productcontext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Productcontext>
    </Sellarcontext>
  </Context>,
)
