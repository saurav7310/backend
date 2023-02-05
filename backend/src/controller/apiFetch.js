// inside dotenv i have declared the api key which is responsible for generating the token api and also for security purpose
require("dotenv").config();

// here i used controller for fetching the data from API
const fetchApiController = (req, res) => {
  // getToken is async for the token and the data which we getting from the data api

  // for the api handlling i have used Node js Axios which is generated from postman
  async function getToken() {
    var axios = require("axios");
    let token;
    let fetchData;

    var config = {
      method: "post",
      url: "https://devcore02.cimet.io/v1/generate-token",
      headers: {
        "Api-key": process.env.APIKEY,
        Cookie:
          "laravel_session=eyJpdiI6ImdsQjA3NUUzeGlKQ3VSdTByU1BqQ1E9PSIsInZhbHVlIjoidVwvMVQ4TkVXK2hFYlJLUGs2TWhBcGpQZ0xONmZnTnNiT1gwcUU0aTFkbjhObFY3cDRZTFB2S1N3S1pSSnNtbkMwWFlncnpzTHZMcE9zNWF6eUV1d1V3PT0iLCJtYWMiOiJkYjg2OGE1ZTFhMTRjYmI0YTc1NTcyZDdmMjdiYTEwZjRjMzgwN2M2ZjQ0NGVlM2VmZDI5Njg0MTE2ODc4Y2M3In0%3D",
      },
    };

    await axios(config)
      .then(function (response) {
        token = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    var data = JSON.stringify({
      session_id:
        "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
    });

    var config = {
      method: "post",
      url: "https://devcore02.cimet.io/v1/plan-list",
      headers: {
        "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        "Auth-token": token.data.token,
        "Content-Type": "application/json",
        Cookie:
          "laravel_session=eyJpdiI6Ik1XaFFhellUNjN5cXVUaXRkQmJzNlE9PSIsInZhbHVlIjoiWEpuYU8zd2hDaVZQUTc1VWcxNU9iT0VMK3I4TU9pNCsyUVwvTVZ2YVRPOGVkdzNhWWxXVXRJMU5URUZRVXY1WEgyd0tUWWVvMTJTNnpqUXQ5Wm9xbG1nPT0iLCJtYWMiOiI5NDVkNjY0YjVmY2U1YzE3NGJkYWM2ZTAyYWEwZTY0ODdhODJjNzliNDFkNzNhNmNhNTdjMjliN2M2NGY4NDUxIn0%3D",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        fetchData = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    return res.json({ data: fetchData });
  }

  getToken();
};

module.exports = fetchApiController;
