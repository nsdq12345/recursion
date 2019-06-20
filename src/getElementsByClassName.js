// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elementsWithClass = [];
  lookthroughElements(document.body);


  function lookthroughElements(element) {

  	if (element.className != undefined) {
  		var classList = element.className.split(/\s+/);


	  	for (var i = 0; i < classList.length; i++) {
	  		if (className == classList[i]) {
	  			elementsWithClass.push(element);
	  		}
	  	}
	}


	if (element.children != undefined) {
	  	for (var i = 0; i < element.children.length; i++) { 
	  		lookthroughElements(element.children[i]);
	  	}
	}
  }

  return elementsWithClass;
};
