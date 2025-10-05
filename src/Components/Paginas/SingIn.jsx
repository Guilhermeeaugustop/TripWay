
import {FaUser, FaLock} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SingIn.css"

const SingIn = () => {
  return (
       <div>
        <div className="Titulo2">
          <h1>Faça seu Cadastro</h1>
        </div>
         <div className='container1'>
          <form>
              <div className='input-field'>
                  <input type="email" placeholder='Email'/>
                  <FaUser className='icon' />
              </div>
              <div className='input-field'>
                  <input type="password" placeholder='Senha'/>
                  <FaLock className='icon' />
               </div>
               <div className='input-field'>
                  <input type="password" placeholder='Confirme sua senha'/>
                  <FaLock className='icon' />
               </div>
               <Link to="/">
                 <div className="Cadastrar"><b>Cadastrar</b></div>
               </Link>
          </form>
             </div>
       </div>
  )
}

export default SingIn