import './style.css';
import logo from '../../assets/images/logo.svg'
import lupa from '../../assets/images/search-icon.svg'
import avatar from '../../assets/images/perfil.jpeg'


function Navbar({ filtrarFilmes }) {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <form>
                <input type="text" placeholder="Pesquise filmes..."  onChange={event => filtrarFilmes(event.target.value) }/>
                {/* <button onChange={event => filtrarFilmes(event.target.value) }><img src={lupa} alt=""/></button> */}
            </form>
            <div className="welcome">
                <span>Bem vindo, Yuri</span>
                <img src={avatar} className="avatar" alt=""/>
            </div>
        </div>
    )
}

export default Navbar;
