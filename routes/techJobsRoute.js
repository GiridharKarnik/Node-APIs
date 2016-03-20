
var techJobRouteFunction = function (express) {
    
    var technologyJobsRoute = express.Router();
    
    technologyJobsRoute.route('/')
    .get(function (req, res) {
        res.send({ info: "route for technology jobs GET" });
    })
    .post(function (req, res) {
        res.send({ info: "route for technology jobs GET" });
    });
    
    technologyJobsRoute.route('/:id')
    .get(function (req, res) {
        res.send({ info: "route for technology jobs GET with id" })
    })
    .put(function (req, res) {
        res.send({ info: "PUT route" })
    })
    .patch(function (req, res) {
        res.send({ info: "PATCH route" })
    })
    .delete(function (req, res) {
        res.send({ info: "DELETE route" })
    });

    return technologyJobsRoute;
};

module.exports = techJobRouteFunction;




    