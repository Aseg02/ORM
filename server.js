const app = express();
const PORT = process.env.PORT || 3001;
const express = require('express');
const routes = require('./routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on port " + PORT + "!");
});
