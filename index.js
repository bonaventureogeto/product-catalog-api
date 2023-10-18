const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./productRoutes');

app.use(bodyParser.json());
// Define your routes here

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
