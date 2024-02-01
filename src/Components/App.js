import { useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Summary from './Summary';

function App() {
  var [shows, setShows] = useState([])
  useEffect(()=>{
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res)=>{setShows(res.data); console.log(res.data[0])})
  },[])
  
  return (

    <Routes>
      <Route path='/'element={
        <div className="App">
        <table className="table">
          <tr>
            <th>Show Name</th>
            <th>Rating</th>
            <th>Summary</th>
          </tr>
          {shows.map((show)=>
            <tr key={show.show.id}>
              <td>{show.show.name}</td>
              <td>{show.show.rating.average || "Not available"}</td>
              <td><Link to={`/summary/${show.show.id}`} >summary</Link></td>
            </tr>
          )}
          
        </table>
      </div>
      }/>
      <Route path='/summary/:id' element={<Summary />}/>
    </Routes>

  );
}

export default App;
