import {FaUser, FaLock} from "react-icons/fa";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className="principal">
      <div className="titulo">
        <h1>TripWay</h1>
      </div>
      <div className='container'>
        <form>
          <div className='Email'>
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder='Email' className="Emailinput"/>
            <FaUser className='icon' />
          </div> 
          <div className='Senha'>
             <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder='Senha' className="Senhainput"/>
            <FaLock className='icon' />
          </div>
          <div className='box'>
            <label htmlFor="">
              <input type="checkbox" />
              Lembre de mim
            </label>
          </div>
          <Link to="/Site">
            <div className="Entrar"><b>Entrar</b></div>
          </Link>
          <div className='Semconta'>
            <p>Não possui conta? <Link to="/SingIn">Click aki</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login