import React ,  { useEffect, useState} from 'react';
import noimage from './images/no_image.jpg'
import Async from 'react-async'
import Loader from './Loader'
import Nav from './Nav'



const About= ({id} ) => {


    const getmovie = () => 
 fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fcd5d6f43f641c10edc0fde7cfebb493&language=en-US`)
  .then(res=>res.ok ? res :  Promise.reject(res))
  .then(res=>res.json())

 

    useEffect(() => {
       getmovie()
      });
return(
    <div>
        
        <Nav/>
   <Async promiseFn={getmovie}>
       {
           ({data ,error , isLoading})=>{
            if(isLoading)return <div style={{position:"absolute",left:"50%",top:"50%", transform:"translate(-50%, -50%)",fontSize:"12px"}}><Loader/></div>
            if(error) return <div style={{position:"absolute",left:"50%",top:"50%", transform:"translate(-50%, -50%)",fontSize:"12px"}}>"{error.message}"</div>
           if(data) return (
            
               <div className="container-fluid"style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(http://image.tmdb.org/t/p/w1280/${data.backdrop_path}) `,
               backgroundRepeat:"no-repeat",backgroundSize:"cover" , height : "100%",width:"100%",position:"relative",backgroundPosition:"center" , color : "white"}}>
                   <div className="container"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`}}>
                   <div className="row container">
                   <div className="col-sm-6">
                   <img src={data.backdrop_path==null ? noimage : `http://image.tmdb.org/t/p/w500/${data.poster_path}`} style={{height : "100%" , width:"100%"}} className="img-fluid" alt="thumbnail"/>
                   </div>
                   <div className="col-sm-6" >
                      <h1 className="mb-5">{data.original_title}</h1>
                      <h6 className="mb-5">release date : {data.release_date}</h6>
                      <h5 className="mb-5">{data.overview}</h5>
                      <h6 className="mb-5">average : {data.vote_average}/10</h6>
           <h5 className="mb-5">genres :{data.genres.map((e)=>e.name).toString()}</h5>
                      <h5 className="mb-5">Runtime : {data.runtime} mins</h5>
                   </div>
                   </div>
                   </div>
                   {/* data.genres.map((e)=>e.name)   */}
               </div>
           )
           }
       }
   </Async>

   </div>
)

};


export default About
