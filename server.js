const express = require('express');
const app = express();

const routes = require('./routes')
app.use('/', routes)

const PORT = 3001 || process.env.PORT
app.listen(PORT, ()=>console.log(`listening ${PORT}`))