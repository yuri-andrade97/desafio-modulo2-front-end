import './style.css';
import goldenStar from '../../assets/images/golden-star.svg';
import formattedMoney from '../../utils/formattedMoney';


function Card({ movies, topMovies, addMovieInCart }) {


    return (
        <>  

        <div>
            
            <div className="title">
                    <h2>Top Filmes</h2>
            </div>

                <div className="movies-list">
                    {topMovies.map(movie => (
                            <div className="card" key={movie.id}>
                                <img src={movie.img} alt="filme" className="capa-filme"/>

                                <div className="content-info">
                                    <div className="info">
                                        <p className="title">{movie.title}</p>
                                        <p className="nota"> <img src={goldenStar} alt="" className="golden-star"/> {movie.vote_average}</p>
                                    </div>

                                    <button className="sacola" onClick={() => addMovieInCart(movie, 1)}>
                                        <h6>Sacola</h6>
                                        <p>R$ {formattedMoney(movie.price)}</p>
                                    </button>
                                    
                                </div>
                            </div>
                        )  
                    )}
        </div>
      
            <div className="title">
                 <h2>Filmes</h2>
            </div>

            <div className="movies-list">

            { movies.map(movie => (
                 <div className="card" key={movie.id}>
                    <img src={movie.img} alt="filme" className="capa-filme"/>

                    <div className="content-info">
                        <div className="info">
                            <p className="title">{movie.title}</p>
                            <p className="nota"> <img src={goldenStar} alt="" className="golden-star"/> {movie.vote_average}</p>
                        </div>

                        <button className="sacola" onClick={() => addMovieInCart(movie, 1)}>
                            <h6>Sacola</h6>
                            <p>R$ {formattedMoney(movie.price)}</p>
                        </button>
                        
                    </div>
                </div>
            ))}
            </div> 
        </div>

        </>
    )
}

export default Card;