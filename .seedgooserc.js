module.exports = {

    modelBaseDirectory: "app_server/database/models", // model directory name
  
    models: ["*.js", "!db.js"], // model matcher
  
    data: "data", // data directory name
  
    db: "mongodb://localhost:27017/travlr", // db connection url
  
  };