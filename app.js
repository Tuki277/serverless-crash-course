const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST
const userRouter = require('./src/router/users.router');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/check-health', (req, res) => {
  res.json({'message': 'ok'});
})

/* router register */
app.use('/api/users', userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`)
});
