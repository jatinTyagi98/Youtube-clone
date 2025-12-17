import Header from './components/Header'
import Body from './components/Body'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'

import './App.css'
import store from './utils/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: 'watch',
          element: <WatchPage />
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
    <div className='font-extrabold text-center text-3xl'>

      <Header />
      <RouterProvider router={appRouter} />


    {
      /**
       * TODO:
       * 1. Header
       * 2. Body
       *  - Sidebar
       *    > Menu Items
       *  - Main Container
       *    > Button List
       *    > Video Container
       *     >> Video Card
       */
    }
    </div>
    </Provider>
  )
}

export default App
