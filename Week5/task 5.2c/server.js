const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const barterRoutes = require('./routes/barterRoutes');


app.use(express.json());
app.use(express.static('views'));


mongoose.connect('mongodb://localhost:27017/smartbarterhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Failed', err));


app.use('/api/barters', barterRoutes);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.listen(PORT, () => {
  console.log(`SmartBarterHub running at http://localhost:${PORT}`);
});
