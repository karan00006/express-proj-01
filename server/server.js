const express = require('express');
const cors = require('cors');
const router = require('./router/student-router');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/students', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});