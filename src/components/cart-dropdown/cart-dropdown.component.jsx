import './cart-dropdown.styles.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckOutHandler = () => navigate('/checkout')


    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(item => <CartItem cartItem={item} key={item.id}/>): <EmptyMessage>Your cart is empty</EmptyMessage> }
                
            </CartItems>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown