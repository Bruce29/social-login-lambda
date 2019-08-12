/**
 * Bruno Rivera
 */
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Running a node-express app!'))

app.get('/:name', function(req, res){
    res.send('Req params: ' + req.params.name);
});

app.post('/:name', function (req, res) {
    res.send('Got a POST request');
});

app.put('/:name', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/:name', function (req, res) {
    res.send('Got a DELETE request');
});
/*const port = process.env.PORT || 3011
app.listen(port, () => console.log(`App is listening on port ${port}.`))*/

module.exports = app;