import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Summary() {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState('');

  useEffect(() => {
    // Fetch the show details based on the ID
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        setShowSummary(res.data.summary);
      })
      .catch((error) => {
        console.error(`Error fetching show details: ${error.message}`);
      });
  }, [id]);

  return (
    <div className='summary'>
      <h2 >Show Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: showSummary }} />
    </div>
  );
}

export default Summary;
