const app = require('./app');

// app.listen(9000, () => console.log('app listening on port 9000'));

const PORT = process.env.PORT || 9000;

// LISTEN
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT} `);
});