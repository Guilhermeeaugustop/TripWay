import {FaUser, FaLock} from "react-icons/fa";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {

  return (
    
    <div className='container'>
        <form>
            <h1>TripWay</h1>
            <div className='input-field'>
                <input type="email" placeholder='Email'/>
                <FaUser className='icon' />
            </div>
            <div className='input-field'>
                <input type="password" placeholder='Senha'/>
                <FaLock className='icon' />
             </div>

             <div className='recall-forget'>
                <label htmlFor="">
                    <input type="checkbox" />
                    Lembre de mim
                </label>
             </div>

             <Link to="/Site">
               <div className="Entrar"><b>Entrar</b></div>
             </Link>

             <div className='singup-link'>
                <p>Não Possui conta? <Link to="/SingIn">Click aki</Link></p>
             </div>

        </form>
    </div>
  )
  const [username, setUsername] = setUsername("");
  const [password, setPassword] = setPassword("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio")
  }
}

export default Login