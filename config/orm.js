var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}



var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			cb(result);
		});
	},
	insertOne: function(table, objCol, objData, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?);";
		connection.query(queryString, [table, objCol, objData], function(err, result) {
			cb(result);
		});
	},
	updateOne: function(table, objCol, objData, conditionCol, conditionData, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(err, result) {
			cb(result);
		});
	}
};

module.exports = orm;