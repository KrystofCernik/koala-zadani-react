import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import './assets/styles/typography.css'
import { Provider } from 'react-redux'
import { dataStore } from './stores/DataStore.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import People from './pages/People'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/people',
    element: <People />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={dataStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
