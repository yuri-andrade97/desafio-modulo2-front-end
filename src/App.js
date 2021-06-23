import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/index'
import Card from './components/Card/index'
import Sacola from './components/Sacola/index'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    handleFillMoviesInCard()
  }, []);

  useEffect(() => {
    handleFillTopMovies(movies)
  }, [movies]);


  async function handleFillMoviesInCard() {
    const response = await fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    const data = await response.json()
    
    const formattedMovies = [];


    for (const movie of data.results) {
      formattedMovies.push({
          "id": movie.id,
          "title": movie.title,
          "img": movie.poster_path,
          "vote_average": movie.vote_average,
          "price": movie.price
      })
    }
   return setMovies(formattedMovies);
  }

  function handleFillTopMovies(movie) {
    const movies = [...movie];

    const moviesFiltred = movies.filter(movie => movie.vote_average >= 8.1);

    return setTopMovies([...moviesFiltred]);
  }

  function filtrarFilmes(event) {
    const allMovies = [...movies];

     const filmesFiltrados = allMovies.filter(movie => movie.title.includes(event));
    
     console.log(filmesFiltrados)

     return setMovies(filmesFiltrados)
  }

  function adicionarFilmeNoCarrinho(movie, value) {
        const {id, img, price, title, vote_average} = movie;
        const myCarrinho = [...carrinho]


        const jaTemNoCarrinho = myCarrinho.findIndex(item => item.id === id);


        if (value === "deletar") {
          myCarrinho.splice(jaTemNoCarrinho, 1);
          calcularSubTotal(movie, value)
          return setCarrinho(myCarrinho);
        }

        if (jaTemNoCarrinho !== -1) {
          calcularSubTotal(movie, value)

          myCarrinho[jaTemNoCarrinho].quantity += value;
          return setCarrinho(myCarrinho)
        }
        
        myCarrinho.push({
          id,
          img,
          price,
          title,
          quantity: 1
        });

        calcularSubTotal(movie, value);
        
        setCarrinho(myCarrinho);
  }

  function finalizarCompra() {
    setSubTotal(subTotal - subTotal)
    setCarrinho([])
    alert("COMPRA FINALIZADA!")
  }

function calcularSubTotal(movie, value) {
    const preco = movie.price;

    if (value === 1) {
     return setSubTotal(subTotal + preco);
    } else if (value === -1 || value === "deletar") {
    return  setSubTotal(subTotal - preco);
    }
}  
    
    return (
      <>
        <Navbar filtrarFilmes={filtrarFilmes}/>
      <div className="app">

        <div className="wrapper">
        
          <Card movies={movies} topMovies={topMovies} addMovieInCart={adicionarFilmeNoCarrinho}/>

          <Sacola movies={movies} carrinho={carrinho} addOuDecrementQTD={adicionarFilmeNoCarrinho} subTotal={subTotal} finalizarCompra={finalizarCompra}/>
        </div>

      </div>
    </>
    );
  }

export default App;
