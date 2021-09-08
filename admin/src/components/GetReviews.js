import axios from 'axios';
import React, {useEffect, useState} from 'react';

const GetReviews = ({locationId}) => {
  const [reviews, setReviews] = useState([]);
  
  const getReviws = async() => {
    try {
      const data = await axios.get(`http://localhost:5000/review/${locationId}`).then(res => res.data)
      setReviews(data.reviews)
    } catch(e) {

    }
  }

  useEffect(() => {
    getReviws()
  }, []);
  
  return (
    <div>
      <div>
      {reviews.map(el => {
        return (
          <div key={el._id}>
            <ul style={{marginBottom: "20px", borderBottom: "1px solid rgb(0, 0, 0, .2)"}}>
                <li>{new Date(el.date).toLocaleDateString()}</li>
                <li>{el.review}</li>
            </ul> 
          </div>        
        )
      })}
      </div>
    </div>
  );
}

export default GetReviews;
