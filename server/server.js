const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/author.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
