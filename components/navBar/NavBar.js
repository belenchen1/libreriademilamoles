import CartWidget from '../CartWidget/CartWidget'
import style from './NavBar.module.css'
// import hero from './assets/hero1.jpg'

const NavBar = () => {
   return(
      <div>
         <h3 className={style.title}>DE MIL AMOLES</h3>
         <h5 className={style.subtitle}>LIBRERÍA Y REGALERÍA</h5>
         <hr></hr>
         <div>
            <button>Oficinas</button>
            <button>Escolar</button>
            <button>Artistica</button>
         </div>
         <CartWidget />
      </div>
      
   );
}

export default NavBar