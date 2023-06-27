import express from 'express'





const app = express();
const port = 500;
app.listen(port, () => {
  console.log(`Server is started on port: ${port}`)
})
app.get('/test', (req, res) => {
   res.send(`Hello from the back end`)
})
