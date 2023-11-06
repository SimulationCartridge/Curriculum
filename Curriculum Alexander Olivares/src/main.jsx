import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
)
