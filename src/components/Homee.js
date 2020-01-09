import React ,  {useState , useEffect} from 'react';
import Movienail from './Movienail'
import './styles/home.css'
import { Link } from "@reach/router";
import Async from 'react-async'
import Loadbtn from './Loadbtn'
import Loader from './Loader'
import Nav from './Nav'
import noimage from './images/no_image.jpg'


const Homee = () => {
  
  const[counter,setcounter]=useState(1)
  



const getmovie = () => 
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fcd5d6f43f641c10edc0fde7cfebb493&language=en-US&page=${counter}`)
    .then(res=> (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
useEffect(()=>{
  getmovie()
})
    return(
      <div>
        <Nav clicked={()=>setcounter(counter)}/>   
<Async promiseFn={getmovie}>
   {
       ({data, error , isLoading})=>{
          if(isLoading)return <div><Loader/></div>
           if(error) return <div style={{position:"absolute",left:"50%",top:"50%", transform:"translate(-50%, -50%)",fontSize:"12px"}}>"{error.message}"</div>
           if(data)return(
             <div>
              <div  className="row mt-5 mx-auto">
              
               {data.results.map(el=>(
                <div className="row mx-auto">
                  <div className="col">
                  <Link to = {`${el.id}`} >
                  <Movienail imag={el.backdrop_path==null ? noimage : `http://image.tmdb.org/t/p/w500/${el.poster_path}`}
                   alt={el.original_title}/>
                  </Link>
                </div>
                </div>
               ))}
             
              </div>
              <Loadbtn click={()=>setcounter(counter + 1)} className="fixed-bottom" value={data.page}/>
              </div>
              
              
           )
           return null
       }
   }

</Async>


</div>


    )

}

export default Homee