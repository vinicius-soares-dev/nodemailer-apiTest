const express = require('express')
const app = express();
require('dotenv').config({ debug: true });
const PORT = 3333 || process.env.PORT;
const nodemailer = require("nodemailer");
const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => {
    console.log(`funcionando na porta ${PORT}`);
});

