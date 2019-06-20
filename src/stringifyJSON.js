// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	console.log("Object: " + obj + " TypeOf: " + typeof(obj));
  // your code goes here
  	if (typeof(obj) == "string") {
  		return '"' + obj + '"';
  	} else if (Array.isArray(obj)) {
  		var arrayString = "[";
  		for (var i = 0; i < obj.length; i++) {
  			arrayString += stringifyJSON(obj[i]);
  			if (i != (obj.length-1)) {
  				arrayString += ",";
  			}
  		}
  		arrayString += "]";
  		return arrayString;
  	}
  	else {	

  		if (!obj) {
  			return "" + obj;	
  		}

  		var keys = Object.keys(obj);
  		console.log("Keys: " + keys);
  		if (keys.length == 0) {
  			if ((""+obj) == "[object Object]") {
  				return "{}";
  			}
  			return "" + obj;
  		} else {
  			var jsonString = "{";
  			for (var i = 0; i < keys.length; i++) {
  				if (typeof(obj[keys[i]]) != "function" && typeof(obj[keys[i]]) != "undefined") {
	  				jsonString += "\"" + keys[i] + "\":" + stringifyJSON(obj[keys[i]]);
	  				if (i != (keys.length-1)) {
	  					jsonString += ","
	  				}
	  			}
  			}
  			jsonString += "}";
  			return jsonString;
  		}
  	}
};
