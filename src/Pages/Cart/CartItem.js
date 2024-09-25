import './CartItem.css';

import { productsData } from '../../Data/products';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../redux/cartSlice';

const CartItem = ({ cartItem, productId }) => {
    const product = productsData.find(product => product.id === cartItem.productId);
    const dispatch = useDispatch();

    return (
        <div className={'cart-item'}>
            <div className={'image-container cart-image'}>
                <img src={`../../images/products/${product.name}.jpg`} alt={product.name} />
            </div>

            <div className='cart-info'>
                <h2 className={'cart-name'}>{product.name} </h2>
                <p className='cart-price'> ${cartItem.totalPrice}
                    <span className={'weight'}>
                        ({product.weight})
                    </span>
                </p>

                <div className={'quantity-btn'}>
                    <button
                        onClick={() => dispatch(updateQuantity
                            ({ cartItem: cartItem.productId, change: -1 }
                            ))}>
                        -
                    </button>
                    <p className={'quantity'}>{cartItem.quantity}</p>
                    <button
                        onClick={() => dispatch(updateQuantity
                            ({ cartItem: cartItem.productId, change: 1 }
                            ))}>
                        +
                    </button>
                    <button className={'delete-btn'} onClick={() => dispatch(removeFromCart(cartItem.productId))}>Delete</button>
                </div>

            </div >
        </div >
    );
};

export default CartItem;;