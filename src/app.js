require("dotenv").config();

const app = require("./server");

app.listen(process.env.PORT, () => {
  console.log(
    `app is running on ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
