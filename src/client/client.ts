import axios from "axios";

const client = axios.create({
  baseURL: "https://desafio-cep.herokuapp.com/",
  headers: {
    apikey:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDEwMDE5NzgsImV4cCI6MTYzMjUzNzk3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.QTXBYNVpEth0Vn3kkICu2JBBnJ6_XtrawrPPxJ2Oxz8",
  },
});

export default client;
