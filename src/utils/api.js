import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// const axios = require('axios');

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "35233089fbmsh0bb1949b7456d6ep1535efjsnf70918ffc74c",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
