const parth = require('path'); 
const express = require('express'); 

const app = express(); 
const port = process.env.PORT || 3003; 

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Port is active and listening at ${port}`)
}); 

