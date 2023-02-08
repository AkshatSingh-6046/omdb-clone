import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// const root = ReactDOM.createRoot(document.getElementById('root'));

const App=()=>{
  
  const [movies,setMovies]=useState([]);
  const [searchText,setSearchText]=useState('harry');
  const [searchText1,setSearchText1]=useState('harry');
  const [likedMovies,setlikedMovies]=useState([]);
  const [togglelike,setTogglelike]=useState(false);
  const getMovies = async(s) =>{
       console.log(s);
      //  setTogglelike[false];
    {const moviesRequest = await axios.get(`http://www.omdbapi.com/?s=${s}&apikey=937ab3d1`);
    setMovies(moviesRequest.data.Search)}
        // return moviesRequest.data.Search;
  } 

  const LikeMovie=(movie)=>
    {
        setlikedMovies([...likedMovies , movie ]);
        // console.log(likedMovies);  
        console.log(likedMovies);
    }
useEffect(()=>{
  getMovies(searchText1);
  
},[searchText1]);



return (
  
<div> <h1>OMDB - CLONE</h1>
  <input placeholder='Search Movies Here' required onChange={(e)=>setSearchText(e.target.value)}/>
  <button type='submit' onClick={()=>{setSearchText1(searchText==""?"harry":searchText)}}>Search
  </button>  
  <br/>
  <button type='submit' onClick={()=>setTogglelike(true) }>Show Liked Movies
   </button>  
  <ol>
    
      

    {
      searchText1.length>=3?
       (movies!=undefined?
        movies.map(movie=>{
      
          return (<li><p>{movie.Title}{" "+movie.Year}</p><button onClick={(e)=>LikeMovie(movie)} >Like</button></li>) 
        
        }):<p> No such Movies found!</p>):<p>Atleast 3 letters required for search</p>
      

      }
      
      
      
      {
      likedMovies!=undefined ? likedMovies.map(movie=>{
      
      return (<li><p>{movie.Title}{" "+movie.Year}</p></li>) 
    
       }):<p> No such Movies found!</p>
      }

  </ol>
  </div>

)
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

