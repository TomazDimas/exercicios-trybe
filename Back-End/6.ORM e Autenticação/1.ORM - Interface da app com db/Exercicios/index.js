const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.json());

app.listen(PORT, () => console.log(`RODANDO APP EM: ${PORT}`));