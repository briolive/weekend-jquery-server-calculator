const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;

app.use(express.static('server/public'))







app.listen(PORT, () => {
    console.log('listening on port', PORT);
});