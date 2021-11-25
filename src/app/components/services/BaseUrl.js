(function() {
  'use strict';
angular
    .module('minotaur').factory('BaseUrl',function(){
	var Str='https://b900-103-155-209-248.ngrok.io/';
	// var Str='https://tech.kiet.edu/api/hrms/';
	return {
		RetBaseUrl:function(){ return Str; }
	};
});
})();
