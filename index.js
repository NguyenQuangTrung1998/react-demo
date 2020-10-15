const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoes', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("success");
});
const productsRouter=require('./routers/products-router');
const authRouter = require('./routers/auth-router');
const userRouter = require('./routers/users-router');
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
   res.send('hello');
})
app.use('/products',productsRouter);
app.use('/auth',authRouter);
app.use('/create',userRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})