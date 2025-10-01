import { Link } from "react-router-dom";
import './Site.css'
import { FaRoute } from "react-icons/fa";

const Site = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo"><Link to='/'><FaRoute />TripWay</Link></div>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link>Sobre</Link></li>
          <li><Link>Contato</Link></li>
        </ul>
      </nav>

      <header className="spacer">
        <h1 className="H1spacer">Bem vindo ao TripWay</h1>
        <p className="P1spacebar">O mundo é enorme e está cheio de aventuras esperando por você. <br /> Nós ajudamos a montar o itinerário, mas quem vive a jornada é você.</p>
      </header>
        <body>
          <section id="inicio">
            <div className="Topo">
              <h1>Bem-vindo ao Tripway</h1>
            </div>
            <div className="Topo2">
              <p>A aplicação visa ser uma ferramenta interativa e colaborativa que auxilia os usuários a montar e gerenciar roteiros de viagem de forma completa.
                <br />
              Seu foco é integrar todas as informações cruciais de uma viagem em um só lugar.
              <ul className="Lista">
                <li>Criação e Visualização de Itinerários: Os usuários podem organizar atividades por dia e horário, visualizando-as em um formato de linha do tempo e em um mapa interativo.</li>
                <li>Integração de Dados: O sistema se conecta a APIs externas de transporte (como Google Maps e Rome2Rio) para calcular deslocamentos e utiliza APIs de clima (como OpenWeather) para fornecer previsões.</li>
                <li>Colaboração em Tempo Real: Permite o compartilhamento dos roteiros por link ou convite, possibilitando a edição colaborativa com outros viajantes.</li>
                <li>Gerenciamento Centralizado de Reservas: Funciona como um painel para registrar e anexar informações de voos, hospedagens e passeios, emitindo notificações de lembrete para os eventos agendados.</li>
              </ul>
              </p>
            </div>
          </section>
        </body>
    </>
  )
}

export default Site;