const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
};

const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network response was not ok",
  SERVER_ERROR: "An error occurred",
};
module.exports = {
  headers,
  ERROR_MESSAGES,
};
