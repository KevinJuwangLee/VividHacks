const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

app.get("/about", (req, res)=>{
  res.sendfile("public/about.html")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});