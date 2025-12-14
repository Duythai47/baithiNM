const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bai thi NM - Backend Render'));
app.listen(port, () => console.log('Server running'));
