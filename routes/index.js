const glob = require("glob");
const path = require("path");

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('../templates/hello-world', {
            message: 'Hello world',
        });
    });
      
    glob.sync("./routes/!(index).js", {
        absolute: true,
    }).forEach(route => {
        require(route)(app);
    });

    // Fallback route
    // app.route(["/", "/*"]).all((req, res) => {
    //     res.sendFile(path.join(__dirname, "./../../dist/index.html"));
    // });
};
