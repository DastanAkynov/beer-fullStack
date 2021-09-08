require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const mapRoutes = require('./routes/mapRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/map', mapRoutes);
app.use('/review', reviewRoutes);


app.use(express.static(path.join(__dirname, 'public')))

const start = async() => {
  try { 
    await mongoose.connect('mongodb://localhost/venskiyDb', {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    })

    app.listen(PORT, () => {
      console.log(`Server was started on ${PORT}...`)
    })
  }
  catch(e) {
    console.log(e)
  }
}

start();