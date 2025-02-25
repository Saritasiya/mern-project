const express = require('express');
const aiRoutes = require("./routes/ai.route")
const app = express();
const cors = require('cors')

app.use(express.json())
// Your other code here
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello sarita")
})

app.use("/ai", aiRoutes) 


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
