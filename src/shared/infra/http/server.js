const app = require('./app')

const port = 7070

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`)
})