const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const restaurantsRouter = require("./routers/restaurants.router")
const usersRouter = require("./routers/users.router")
app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get('/', (req, res) => {
  res.send('app entry point');
});

app.use('/restaurants', restaurantsRouter)
app.use('/users', usersRouter)

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});