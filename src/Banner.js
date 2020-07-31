import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrgionals);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return <div></div>;
}

export default Banner;
