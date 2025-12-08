import Header from './components/Header'
import Body from './components/Body'


import './App.css'
import store from './utils/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
    <div className='font-extrabold text-center text-3xl'>

      <Header />
      <Body />


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
