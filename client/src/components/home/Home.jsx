import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ME from '../../assets/call.jpg';
import "./home.css";
import axios from "axios";


const Home = () => {
  const [generatedLink, setGeneratedLink] = useState('');

  function generateLink() {
    axios.post('/api', { })
      .then(res => {
        

      })
      .catch(err => {
        console.error(err);
      });
  }

  function redirectToLink() {
   

    axios.get(`/`)
      .then(res => {
        window.location.href = res.request.responseURL;
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <section>
      <h1>Generate and redirect to room</h1>

      <div>
        <button onClick={generateLink}>Generate link</button>
        <p>{generatedLink}</p>
      </div>

      <div>
        <button onClick={redirectToLink}>Redirect to room</button>
      </div>
    </section>
  );
};

export default Home;
