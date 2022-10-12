import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import CheckOut from './routes/check-out/check-out.component';
import {Routes, Route} from 'react-router-dom'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';




const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user) => {
     if(user){
      createUserDocFromAuth(user)
      }
      dispatch(setCurrentUser(user))
     })
    return unsubscribe
  }, [dispatch])

 

  return(
  <Routes>
    <Route path='/' element={ <Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='shop/*' element={<Shop/>}></Route>
        <Route path='auth' element={<Authentication/>}></Route>
        <Route path='checkout' element={<CheckOut/>}></Route>

    </Route>
  </Routes>
  )
}

export default App;
