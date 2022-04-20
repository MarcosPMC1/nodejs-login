const express = require('express');
const Routes = require("./routes")

const app = express();

app.use(express.json());
app.use(Routes);

app.get('/', (req, res) => {
    return res.json('up');
});

app.listen(8081, () => console.log('Server up in 8081'))

