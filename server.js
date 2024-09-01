const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");
const { headers, ERROR_MESSAGES } = require("./constants");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get("/api/foodCategory", (req, res) => {
  const { lat, lng, tags, collection } = req.query || {};
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${collection}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

app.get("/api/restaurants", (req, res) => {
  const { lat, lng } = req.query;
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING
    `;

  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

app.get("/api/menu", (req, res) => {
  const { lat, lng, restaurantId } = req.query;
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${restaurantId}`;

  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(ERROR_MESSAGES.SERVER_ERROR);
    });
});

app.get("/location", (req, res) => {
  const { input } = req.query;
  const url = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${input}`;

  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

app.get("/addresses", (req, res) => {
  const { place_id } = req.query;
  const url = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`;
  fetch(url, {
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Swiggy API!", testing: "Hello!!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
