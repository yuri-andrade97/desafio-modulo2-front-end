import bag from '../../assets/images/bag.svg'
import person from '../../assets/images/person-illustration.svg'
import formattedMoney from '../../utils/formattedMoney';
import plus  from '../../assets/images/plus-icon.svg';
import minus from '../../assets/images/minus-icon.svg'
import trash from '../../assets/images/trash-icon.svg'

import './style.css';




function Sacola({ movies,  carrinho,  addOuDecrementQTD,  subTotal, finalizarCompra }) {
    return (
            <>
            {carrinho.length > 0 ? (
             <div className="carrinhoComItens">
                    <div className="header">
                        <div className="wrapper-header">
                            <img src={bag} alt="" />
                            <span>Sacola</span>
                        </div>
                    </div>
                
                <div className="wrapperCartWithItems">
                {carrinho.map(movie => (

                    <div className="cartWithItems" key={movie.id}>

                        <div className="imgMovie">
                            <img src={movie.img} alt="" />
                        </div>

                        <div className="info-content">
                            <div className="contentMovie">
                                <span className="titleMovie">{movie.title}</span>
                                <span>R${formattedMoney(movie.price)}</span>
                            </div>

                            <div className="buttons">
                                <button onClick={() => addOuDecrementQTD(movie, 1)}><img src={plus} alt="" /></button>
                                   {movie.quantity}
                                {movie.quantity > 1 ?  <button onClick={() => addOuDecrementQTD(movie, -1)}><img src={minus} alt="" /></button> 
                                    : <button onClick={() => addOuDecrementQTD(movie, "deletar")}><img src={trash} alt="" /></button>}    
                                    
                            </div>
                        </div>
                    </div>

                )) }

                    <div className="buttonToFinish">
                        <button onClick={finalizarCompra}>
                            Finalizar compra
                            <span>R${subTotal.toFixed(2)}</span>
                        </button>
                    </div>

                </div>

            </div>

             ) : (

                <div className="carrinhoVazio">
                    <div className="header">
                        <div className="wrapper-header">
                            <img src={bag} alt="" />
                            <span>Sacola</span>
                        </div>
                    </div>
                    <div className="wrapperCartWithoutItems">

                        <div className="content-cart">
                            <span className="text">Sua Sacola está vazia</span>
                            <span>Adicione Filmes agora</span>
                            <img src={person} alt="" />
                        </div>
                    </div>
                 </div>
            )}
            </>

        
    );
}

export default Sacola;