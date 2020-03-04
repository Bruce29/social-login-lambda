/**
 * Bruno Rivera
 */
const app = require('./app')
const port = process.env.PORT || 3011
app.listen(port, () => console.log(`App is listening on port ${port}.`))