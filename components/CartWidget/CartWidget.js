import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
   return (
      <div>
         <img src={cart} className={styles.cart} alt="Cart widget"/>
         <p className={styles.itemsInCart}>0</p>
      </div>
   )
}

export default CartWidget