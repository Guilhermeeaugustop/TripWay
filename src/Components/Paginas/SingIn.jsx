
import {FaUser, FaLock} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import "./SingIn.css"

const SingIn = () => {
  return (
       <div>
        <div className="Titulo2">
          <h1>Faça seu Cadastro</h1>
        </div>
         <div className='container1'>
          <form>
              <div className='SingNome'>
                <label htmlFor="nome"><b>Nome</b></label>
                  <input type="nome" placeholder='Nome' className="SingNome2"/>
                  <FaUser className='icon' />
              </div>
              <div className='SingEmail'>
                <label htmlFor="Email"><b>Email</b></label>
                  <input type="email" placeholder='Email' className="SingEmail2"/>
                  <FaLock className='icon' />
              </div>
               <div className='SingSenha'>
                <label htmlFor="nome"><b>Senha</b></label>
                  <input type="password" placeholder='Confirme sua senha' className="SingSenha2"/>
                  <MdAlternateEmail className='icon' />
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