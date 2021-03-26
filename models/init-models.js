var DataTypes = require("sequelize").DataTypes;
var _circuits = require("./circuits");
var _constructorResults = require("./constructorResults");
var _constructorStandings = require("./constructorStandings");
var _constructors = require("./constructors");
var _driverStandings = require("./driverStandings");
var _drivers = require("./drivers");
var _lapTimes = require("./lapTimes");
var _pitStops = require("./pitStops");
var _qualifying = require("./qualifying");
var _races = require("./races");
var _results = require("./results");
var _seasons = require("./seasons");
var _status = require("./status");

function initModels(sequelize) {
  var circuits = _circuits(sequelize, DataTypes);
  var constructorResults = _constructorResults(sequelize, DataTypes);
  var constructorStandings = _constructorStandings(sequelize, DataTypes);
  var constructors = _constructors(sequelize, DataTypes);
  var driverStandings = _driverStandings(sequelize, DataTypes);
  var drivers = _drivers(sequelize, DataTypes);
  var lapTimes = _lapTimes(sequelize, DataTypes);
  var pitStops = _pitStops(sequelize, DataTypes);
  var qualifying = _qualifying(sequelize, DataTypes);
  var races = _races(sequelize, DataTypes);
  var results = _results(sequelize, DataTypes);
  var seasons = _seasons(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);


  return {
    circuits,
    constructorResults,
    constructorStandings,
    constructors,
    driverStandings,
    drivers,
    lapTimes,
    pitStops,
    qualifying,
    races,
    results,
    seasons,
    status,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
