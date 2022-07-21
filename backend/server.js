const mongoose = require("mongoose");
const app = require("./app");


const DB =
"mongodb+srv://Paulius:0nnXkRxmwxBF5TR3@cluster0.0hwmdlm.mongodb.net/test?retryWrites=true&w=majority";
  mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Prisijungta prie DB...:)");
  });

  

  const port = 8000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
