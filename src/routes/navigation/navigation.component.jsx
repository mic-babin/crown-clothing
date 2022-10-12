import { Outlet } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../store/user/user.selector.js'

const Navigation = () => {
    const currentUser = selectCurrentUser
    const { isCartOpen } = useContext(CartContext)
   
    return (
      <Fragment>
        <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (<NavLink className='nav-link' to="/auth">SIGN IN</NavLink>) }
          <CartIcon/>
        </NavLinks>
        { isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet></Outlet>
      </Fragment>
    )
  }
  
  export default Navigation