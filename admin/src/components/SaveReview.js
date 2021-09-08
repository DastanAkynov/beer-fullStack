import axios from 'axios';
import React, { useState } from 'react';

const SaveReview = ({ locationId, userId }) => {
  const [review, setReview] = useState('');

  const saveReview = async() => {
    try {
     const res = await axios.post('http://localhost:5000/review/create', {review, locationId, userId}).then(res => res)
    if(res.data && res.data.message) {
      alert(res.data.message)
    }
     
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <h5>Оставьте свой отзыв</h5>
        <textarea
          type="text"
          name="review"
          onChange={e => setReview(e.target.value)}
          style={{minHeight: "200px"}}
        />
        <button onClick={saveReview} className="waves-effect waves-light btn-small">Сохранить отзыв</button>
      </form>
    </div>
  );
}

export default SaveReview;
