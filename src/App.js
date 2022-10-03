import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return(
  <Routes>
    <Route path='/' element={ <Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='auth' element={<Authentication/>}></Route>
    </Route>
  </Routes>
  )
}

export default App;
