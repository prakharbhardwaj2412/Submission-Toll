(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* global angular, hljs */
	'use strict';

	// var angular = require('angular');

	var dragular = __webpack_require__(1);

	angular
		.module('examplesApp', [dragular, 'templates', 'ui.router']);

	var examplesRouter = __webpack_require__(4);
	var BasicCtrl = __webpack_require__(5);
	var BasicModelCtrl = __webpack_require__(6);
	var BoundingBoxCtrl = __webpack_require__(7);
	var BoundingBoxLockXCtrl = __webpack_require__(8);
	var BoundingBoxLockYCtrl = __webpack_require__(9);
	var CopyCtrl = __webpack_require__(10);
	var CopyModelCtrl = __webpack_require__(11);
	var CustomClassesCtrl = __webpack_require__(12);
	var DifferentOptionsModelCtrl = __webpack_require__(13);
	var DirectiveCtrl = __webpack_require__(14);
	var DirectiveModelCtrl = __webpack_require__(15);
	var DragOverEventsCtrl = __webpack_require__(16);
	var EventsCtrl = __webpack_require__(17);
	var HandleCtrl = __webpack_require__(18);
	var IsContainerModelCtrl = __webpack_require__(19);
	var NameSpacesCtrl = __webpack_require__(20);
	var NestedNgRepeatCtrl = __webpack_require__(21);
	var NestedNgRepeatWithModelCtrl = __webpack_require__(22);
	var NgRepeatCtrl = __webpack_require__(23);
	var NgRepeatFilteredWithModelCtrl = __webpack_require__(24);
	var NgRepeatWithModelCtrl = __webpack_require__(25);
	var RemoveOnSpillCtrl = __webpack_require__(26);
	var RemoveOnSpillWithModelCtrl = __webpack_require__(27);
	var RevertOnSpillCtrl = __webpack_require__(28);
	var ScrollingDragCtrl = __webpack_require__(29);
	var NestedRepeatsWithCustomDirective = __webpack_require__(30);
	__webpack_require__(31);

	/**
	 *  Module Example App
	 *
	 *  DEMO app for dragular https://github.com/luckylooke/dragular
	 */

	angular
	  .module('examplesApp')
	  .config(examplesRouter)
	  .controller('Basic', BasicCtrl)
	  .controller('BasicModel', BasicModelCtrl)
	  .controller('BoundingBox', BoundingBoxCtrl)
	  .controller('BoundingBoxLockX', BoundingBoxLockXCtrl)
	  .controller('BoundingBoxLockY', BoundingBoxLockYCtrl)
	  .controller('Copy', CopyCtrl)
	  .controller('CopyModel', CopyModelCtrl)
	  .controller('CustomClasses', CustomClassesCtrl)
	  .controller('DifferentOptionsModel', DifferentOptionsModelCtrl)
	  .controller('Directive', DirectiveCtrl)
	  .controller('DirectiveModel', DirectiveModelCtrl)
	  .controller('DragOverEvents', DragOverEventsCtrl)
	  .controller('Events', EventsCtrl[0])
	  .controller('Events2', EventsCtrl[1])
	  .controller('Handle', HandleCtrl)
	  .controller('IsContainerModel', IsContainerModelCtrl)
	  .controller('NameSpaces', NameSpacesCtrl)
	  .controller('NestedNgRepeat',  NestedNgRepeatCtrl)
	  .controller('NestedNgRepeatWithModel', NestedNgRepeatWithModelCtrl)
	  .controller('NgRepeat', NgRepeatCtrl)
	  .controller('NgRepeatFilteredWithModel', NgRepeatFilteredWithModelCtrl)
	  .controller('NgRepeatWithModel', NgRepeatWithModelCtrl)
	  .controller('RemoveOnSpill', RemoveOnSpillCtrl)
	  .controller('RemoveOnSpillWithModel', RemoveOnSpillWithModelCtrl)
	  .controller('RevertOnSpill', RevertOnSpillCtrl)
	  .controller('ScrollingDrag', ScrollingDragCtrl)
	  .controller('NestedRepeatsWithCustomDirective', NestedRepeatsWithCustomDirective)
	  .controller('ExAppCtrl', ['$scope', function($scope) {
	    $scope.examplesList = [{
	        template: 'docsInstall/docsInstall.html',
	        link: 'docsInstall',
	        title: 'Installation'
	    },{
	        template: 'exampleBasic/exampleBasic.html',
	        link: 'exampleBasic',
	        title: 'Basic'
	    },{
	        template: 'exampleBasicWithModel/exampleBasicWithModel.html',
	        link: 'exampleBasicWithModel',
	        title: 'Basic - with model'
	    },{
	        template: 'exampleDifferentOptionsWithModel/exampleDifferentOptionsWithModel.html',
	        link: 'exampleDifferentOptionsWithModel',
	        title: 'Different options - with model'
	    }, {
	        template: 'exampleDirective/exampleDirective.html',
	        link: 'exampleDirective',
	        title: 'Directive'
	    }, {
	        template: 'exampleDirectiveWithModel/exampleDirectiveWithModel.html',
	        link: 'exampleDirectiveWithModel',
	        title: 'Directive - with model'
	    }, {
	        template: 'exampleEvents/exampleEvents.html',
	        link: 'exampleEvents',
	        title: 'Events'
	    }, {
	        template: 'exampleRemoveOnSpill/exampleRemoveOnSpill.html',
	        link: 'exampleRemoveOnSpill',
	        title: 'Remove on spill'
	    }, {
	        template: 'exampleRemoveOnSpillWithModel/exampleRemoveOnSpillWithModel.html',
	        link: 'exampleRemoveOnSpillWithModel',
	        title: 'Remove on spill - with model'
	    }, {
	        template: 'exampleRevertOnSpill/exampleRevertOnSpill.html',
	        link: 'exampleRevertOnSpill',
	        title: 'Revert on spill'
	    }, {
	        template: 'exampleCopy/exampleCopy.html',
	        link: 'exampleCopy',
	        title: 'Copy'
	    }, {
	        template: 'exampleCopyWithModel/exampleCopyWithModel.html',
	        link: 'exampleCopyWithModel',
	        title: 'Copy - with model'
	    }, {
	        template: 'exampleHandle/exampleHandle.html',
	        link: 'exampleHandle',
	        title: 'Handle'
	    }, {
	        template: 'exampleIsContainerWithModel/exampleIsContainerWithModel.html',
	        link: 'exampleIsContainerWithModel',
	        title: 'isContainer - with model'
	    }, {
	        template: 'exampleCustomClasses/exampleCustomClasses.html',
	        link: 'exampleCustomClasses',
	        title: 'Custom classes'
	    }, {
	        template: 'exampleNameSpaces/exampleNameSpaces.html',
	        link: 'exampleNameSpaces',
	        title: 'NameSpaces'
	    }, {
	        template: 'exampleDragOverEvents/exampleDragOverEvents.html',
	        link: 'exampleDragOverEvents',
	        title: 'Drag-over events'
	    }, {
	        template: 'exampleBoundingBox/exampleBoundingBox.html',
	        link: 'exampleBoundingBox',
	        title: 'BoundingBox'
	    }, {
	        template: 'exampleBoundingBoxLockX/exampleBoundingBoxLockX.html',
	        link: 'exampleBoundingBoxLockX',
	        title: 'BoundingBox + LockX'
	    }, {
	        template: 'exampleBoundingBoxLockY/exampleBoundingBoxLockY.html',
	        link: 'exampleBoundingBoxLockY',
	        title: 'BoundingBox + LockY'
	    }, {
	        template: 'exampleNgRepeat/exampleNgRepeat.html',
	        link: 'exampleNgRepeat',
	        title: 'ngRepeat'
	    }, {
	        template: 'exampleNgRepeatWithModel/exampleNgRepeatWithModel.html',
	        link: 'exampleNgRepeatWithModel',
	        title: 'ngRepeat - with model'
	    }, {
	        template: 'exampleNgRepeatFilteredWithModel/exampleNgRepeatFilteredWithModel.html',
	        link: 'exampleNgRepeatFilteredWithModel',
	        title: 'Filtered ngRepeat - with model'
	    }, {
	        template: 'exampleNestedNgRepeat/exampleNestedNgRepeat.html',
	        link: 'exampleNestedNgRepeat',
	        title: 'Nested ngRepead'
	    }, {
	        template: 'exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html',
	        link: 'exampleNestedNgRepeatWithModel',
	        title: 'Nested ngRepead - with model'
	    }, {
	        template: 'exampleScrollingDrag/exampleScrollingDrag.html',
	        link: 'exampleScrollingDrag',
	        title: 'Scrolling drag'
	    }, {
	        template: 'exampleSNestedRepeatsWithCustomDirective/exampleNestedRepeatsWithCustomDirective.html',
	        link: 'exampleNestedRepeatsWithCustomDirective',
	        title: 'Nested repeats with custom directive'
	    }];

	    $scope.highlightCode = function () {
	        if(document.getElementsByTagName('code').length){
	            var codeBlocks = document.getElementsByTagName('code');
	            for (var i = codeBlocks.length - 1; i >= 0; i--) {
	                hljs.highlightBlock(codeBlocks[i]);
	            }
	        }
	    };

	    var rowOffcanvas;
	    $scope.toggleSidebar = function toggleSidebar () {
	        if(!rowOffcanvas){
	            rowOffcanvas = angular.element(document.getElementById('rowOffcanvas'));
	        }
	        rowOffcanvas.toggleClass('active');
	    };

	  }]);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* global angular */
	'use strict';
	var dragularDirective = __webpack_require__( 2 );
	var dragularService = __webpack_require__( 3 );

	/**
	 * Dragular 4.6.0 by Luckylooke https://github.com/luckylooke/dragular
	 * Angular version of dragula https://github.com/bevacqua/dragula
	 */
	module.exports = 'dragularModule';

	angular
		.module( 'dragularModule', [] )
		.factory( 'dragularService', dragularService )
		.directive( 'dragular', dragularDirective );


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * dragular Directive by Luckylooke https://github.com/luckylooke/dragular
	 * Angular version of dragula https://github.com/bevacqua/dragula
	 */

	var dragular = function ( dragularService ) {
		return {
			restrict: 'A',
			link: function ( $scope, iElm, iAttrs ) {

				var options = $scope.$eval( iAttrs.dragular ) || tryJson( iAttrs.dragular ) || {};

				function tryJson( json ) {
					try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
						return JSON.parse( json );
					} catch ( e ) {
						return undefined;
					}
				}

				if ( iAttrs.dragularModel ) {
					options.containersModel = iAttrs.dragularModel;
					if ( !options.scope ){
						options.scope = $scope;
					}
				}

				if ( iAttrs.dragularNameSpace ) {
					options.nameSpace = iAttrs.dragularNameSpace.split( ' ' );
				}

				if ( iAttrs.dragularOnInit ) {
					options.onInit = $scope.$eval( iAttrs.dragularOnInit );
				}

				dragularService( iElm[ 0 ], options );
			}
		};
	};

	dragular.$inject = [ 'dragularService' ];

	module.exports = dragular;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* global angular */
	'use strict';

	/**
	 * dragular Service by Luckylooke https://github.com/luckylooke/dragular
	 * Angular version of dragula https://github.com/bevacqua/dragula
	 */

	var shared = { // sahred object between all service instances
		classesCache: {}, // classes lookup cache
		containersCtx: {}, // containers model
		containers: {}, // containers
		mirror: null, // mirror image
		source: null, // source container
		item: null, // item being dragged
		copy: null, // copy flag
		sourceItem: null, // item originaly dragged if copy is enabled
		sourceModel: null, // source container model
		sourceFilteredModel: null, // source container filtered model if relevant
		target: null, // droppable container under drag item
		targetCtx: null, // target container context
		targetModel: null, // target container model
		lastDropTarget: null, // last container item was over
		offsetX: null, // reference x
		offsetY: null, // reference y
		moveX: null, // reference move x
		moveY: null, // reference move y
		offsetXr: null, // reference x right for boundingBox feature
		offsetYb: null, // reference y bottom for boundingBox feature
		clientX: null, // cache client x, init at grab, update at drag
		clientY: null, // cache client y, init at grab, update at drag
		mirrorWidth: null, // mirror width for boundingBox feature
		mirrorHeight: null, // mirror height for boundingBox feature
		initialSibling: null, // reference sibling when grabbed
		currentSibling: null, // reference sibling now
		initialIndex: null, // reference model index when grabbed
		currentIndex: null, // reference model index now
		tempModel: null, // if o.isContainer is used, model can be provided as well, it is temporary saved here during drags
		dragOverEvents: {}, // drag over events fired on element behind cursor
		lastElementBehindCursor: null, // last element behind cursor
		grabbed: null // holds mousedown context until first mousemove
	};

	var dragularService = function ( $rootScope, $compile ) {

		// abbreviations
		var _doc = document,
			_docElm = _doc.documentElement,
			_isArray = Array.isArray,
			_isFunction = angular.isFunction;

		// clean common/shared objects
		service.cleanEnviroment = function cleanEnviroment() {
			shared.classesCache = {};
			shared.containersCtx = {};
			shared.containers = {};
			shared.mirror = undefined;
		};

		service.shared = shared;

		return service;

		// service definition
		function service( arg0, arg1 ) {

			var initialContainers = arg0 || [],
				options = arg1 || {},
				o, // shorthand for options
				g = getBool, // shorthand for getBool

				// defaults
				defaultClasses = {
					mirror: 'gu-mirror',
					hide: 'gu-hide',
					unselectable: 'gu-unselectable',
					transit: 'gu-transit'
				},
				defaultEventNames = {
					// drag-over DOM events
					dragularenter: 'dragularenter',
					dragularleave: 'dragularleave',
					dragularrelease: 'dragularrelease',
					// $scope events
					dragularcloned: 'dragularcloned',
					dragulardrag: 'dragulardrag',
					dragularcancel: 'dragularcancel',
					dragulardrop: 'dragulardrop',
					dragularremove: 'dragularremove',
					dragulardragend: 'dragulardragend',
					dragularshadow: 'dragularshadow',
					dragularover: 'dragularover',
					dragularout: 'dragularout'
				},
				defaultOptions = { // options with defaults
					copyOptions: false, // copy options object when provided
					classes: defaultClasses, // classes used by dragular
					eventNames: defaultEventNames, // event names used by dragular
					containers: false, // initial containers provided via options object (are provided via parameter by default)
					containersModel: false, // if provided, model will be synced with DOM
					containersFilteredModel: false, // if provided, dragular will handle filtered model cases
					isContainer: never, // potential target can be forced to be container by custom logic
					isContainerModel: getEmptyArray, // if isContainer function is provided, you can provide also respective model
					isContainerAccepts: always, // if isContainer function is provided, you can provide also respective accept function
					moves: always, // can drag start?
					accepts: always, // can target accept dragged item? (target context used)
					canBeAccepted: always, // can be dragged item accepted by target? (source context used)
					copy: false, // dragged item will be copy of source? flag or function
					copySortSource: false, // enable sorting in source when copying item
					dontCopyModel: false, // dont make copy of model when coping item (#61)
					invalid: never, // target (in)validity function
					revertOnSpill: false, // item returns to original place
					removeOnSpill: false, // item will be removed if not placed into valid target
					lockX: false, // lock movement into x-axis
					lockY: false, // lock movement into y-axis
					boundingBox: false, // lock movement inside this element boundaries
					mirrorContainer: _doc.body, // element for appending mirror
					ignoreInputTextSelection: true, // text selection in inputs wont be considered as drag
					compileItemOnDrop: false,
					onInit: false // function callback called after dragular initialisation and providing drake as first argument
				},

				drake = {
					containers: shared.containers, // all containers
					containersCtx: shared.containersCtx, // all contexts to containers
					sanitizeContainersModel: depSanitize,
					sanitizeContainers: sanitizeContainers,
					addContainers: addContainers,
					removeContainers: removeContainers,
					isContainer: isContainer,
					start: manualStart,
					end: end,
					cancel: cancel,
					remove: remove,
					destroy: destroy,
					dragging: false
				};

			processServiceArguments(); // both arguments (containers and options) are optional, this function handle this
			extendOptions();
			processOptionsObject();
			registerEvents();

			if ( o.onInit ) {
				o.onInit( drake, o );
			}
			return drake;


			// Function definitions: ==============================================================================================================


			// ====================================================================================================================================
			// Dragular service init functions: ---------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function processServiceArguments() {

				if ( typeof arg0 === 'string' ) {
					initialContainers = document.querySelectorAll( arg0 );
				}
				else if (
	        arguments.length === 1 && // if there is only one argument we need to distinguish if it is options object or container(s) reference
					!_isArray( arg0 ) && // array of containers elements
					!angular.isElement( arg0 ) && // one container element
					!arg0[ 0 ]){ // array-like object with containers elements
					// then arg0 is options object
					options = arg0 || {};
					initialContainers = []; // containers are not provided on init
				}

				o = options.copyOptions ? angular.copy( options ) : options;
			}

			function extendOptions() {

				var tmp = angular.extend( {}, defaultOptions, o ); // tmp for keeping defaults untouched
				angular.extend( o, tmp ); // merge defaults back into options

				if ( o.classes ) {

					tmp = angular.extend( {}, defaultClasses, o.classes );
					angular.extend( o.classes, tmp );
				}

				if ( o.eventNames ) {

					tmp = angular.extend( {}, defaultEventNames, o.eventNames );
					angular.extend( o.eventNames, tmp );
				}
			}

			function processOptionsObject() {

				// bounding box must be pure DOM element, not jQuery wrapper or something else..
				if ( !isElement( o.boundingBox ) ) {
					o.boundingBox = false;
				}

				// initial containers provided via options are higher priority then by parameter
				if ( o.containers ) {
					initialContainers = o.containers;
				}

				// sanitize initialContainers
				o.containers = sanitizeContainers( initialContainers, false, o.scope );

				// sanitize o.containersModel
				o.containersModel = sanitizeContainers( o.containersModel, true, o.scope );

				// sanitize o.containersFilteredModel
				if ( _isArray( o.containersFilteredModel ) ) {
					//                  |-------- is 2D array? -----------|
					o.containersFilteredModel = _isArray( o.containersFilteredModel[ 0 ] ) ? o.containersFilteredModel : [ o.containersFilteredModel ];
				} else {
					o.containersFilteredModel = [];
				}

				// feed containers groups and optionaly do same for models
				if ( !o.nameSpace ) {
					o.nameSpace = [ 'dragularCommon' ];
				}

				if ( !_isArray( o.nameSpace ) ) {
					o.nameSpace = [ o.nameSpace ];
				}

				o.nameSpace.forEach( function eachNameSpace( nameSpace ) {

					if ( !shared.containers[ nameSpace ] ) {

						shared.containers[ nameSpace ] = [];
						shared.containersCtx[ nameSpace ] = [];
					}

					var len = getContainers( o ).length,
						cont;

					for ( var i = 0; i < len; i++ ) {

						cont = getContainers( o )[ i ];

						if (!cont) {
							throw new Error( 'Container element must be defined!' );
						}

						if (shared.containers[ nameSpace ].indexOf(cont) !== -1) {
							throw new Error( 'Cannot register container element more than once! Container element: ' );
						}

						shared.containers[ nameSpace ].push(cont);
						shared.containersCtx[ nameSpace ].push({
							o: o,
							m: getContainersModel( o )[ i ], // can be undefined
							fm: getContainersFilteredModel( o )[ i ] // can be undefined
						});
					}
				} );
			}

			function registerEvents( remove ) {
				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'mouseup', release );

				getContainers( o ).forEach( function addMouseDown( container ) {
					regEvent( container, 'on', 'mousedown', grab );
				} );

				if ( !remove ) { // create dragular DOM events
					angular.forEach( [ 'dragularenter', 'dragularleave', 'dragularrelease' ], function prepareDragOverEvents( name ) {
						var eventName = o.eventNames[ name ];
						if ( !shared.dragOverEvents[ eventName ] ) {
							if ( _doc.createEvent ) {
								shared.dragOverEvents[ eventName ] = _doc.createEvent( 'HTMLEvents' );
								shared.dragOverEvents[ eventName ].initEvent( eventName, true, true );
							} else {
								shared.dragOverEvents[ eventName ] = _doc.createEventObject();
								shared.dragOverEvents[ eventName ].eventType = eventName;
							}
						}
					} );
				}
			}


			// ====================================================================================================================================
			// Grab stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function grab( e ) {

				// filter some odd situations
				if ( whichMouseButton( e ) !== 1 || e.metaKey || e.ctrlKey ) {
					return; // we only care about honest-to-god left clicks and touch events
				}

				// set itial values
				shared.moveX = e.clientX;
				shared.moveY = e.clientY;

				var context = canStart( e.target );
				if ( !context || !context.item ) {
					return;
				}

				shared.grabbed = context;
				eventualMovements();
				if ( e.type === 'mousedown' ) {
					if ( isInput( e.target ) ) { // see also: https://github.com/bevacqua/dragula/issues/208
						e.target.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
						// changed from context.item to e.target fixing https://github.com/luckylooke/dragular/issues/87#issuecomment-256865796
					} else {
						e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
					}
				}
			}

			function eventualMovements( remove ) {

				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'mousemove', startBecauseMouseMoved );
			}

			function startBecauseMouseMoved( e ) {

				if ( !shared.grabbed || drake.dragging ) {
					return;
				}

				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery enviroment
				}

				if ( whichMouseButton( e ) === 0 ) {
					release( {} );
					return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
				}

				// truthy check fixes dragula-#239, equality fixes dragula-#207
				if ( e.clientX && e.clientX === shared.moveX && e.clientY && e.clientY === shared.moveY ) {
					return;
				}

				if ( g( o.ignoreInputTextSelection ) ) {

					var clientX = getCoord( 'clientX', e ),
						clientY = getCoord( 'clientY', e ),
						elementBehindCursor = _doc.elementFromPoint( clientX, clientY );
					if ( isInput( elementBehindCursor ) ) {
						return;
					}
				}

				var grabbed = shared.grabbed; // calling end() unsets shared.grabbed
				eventualMovements( 'remove' ); // remove mousemove listener
				movements();
				end();
				start( grabbed );

				if ( !shared.item ) {
					return;
				}

				// automaticly detect direction of elements if not set in options
				if ( !o.direction && getParent( shared.sourceItem ) ) {
					var parent = shared.sourceItem.parentNode,
						parentHeight = parent.offsetHeight,
						parentWidth = parent.offsetWidth,
						childHeight = shared.sourceItem.clientHeight,
						childWidth = shared.sourceItem.clientWidth;
					o.direction = parentHeight / childHeight < parentWidth / childWidth ? 'horizontal' : 'vertical';
				}

				// get initial coordinates, used to render shared.mirror for first time
				var offset = getOffset( shared.sourceItem );
				shared.offsetX = getCoord( 'pageX', e ) - offset.left;
				shared.offsetY = getCoord( 'pageY', e ) - offset.top;
				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				// limiting area of shared.mirror movement, get initial coordinates
				if ( o.boundingBox ) {
					shared.offsetXr = getCoord( 'pageX', e ) - offset.right;
					shared.offsetYb = getCoord( 'pageY', e ) - offset.bottom;
				}

				e.preventDefault();

				renderMirrorImage();
				addClass( shared.item, o.classes.transit );
				// initial position
				shared.mirror.style.left = shared.clientX - shared.offsetX + 'px';
				shared.mirror.style.top = shared.clientY - shared.offsetY + 'px';

				drag( e );
			}

			function movements( remove ) {

				var op = remove ? 'off' : 'on';
				regEvent( _docElm, op, 'selectstart', preventGrabbed ); // IE8
				regEvent( _docElm, op, 'click', preventGrabbed );
				regEvent( _docElm, op, 'touchmove', preventGrabbed ); // fixes touch devices scrolling while drag
			}

			function canStart( item ) {
				if ( drake.dragging && shared.mirror ) {
					return; // already dragging
				}

				var handle = item;
				while ( getParent( item ) && !isContainer( getParent( item ) ) ) {
					// break loop if user tries to drag item which is considered invalid handle
					if ( o.invalid( item, handle ) ) {
						return;
					}
					item = getParent( item ); // drag target should be immediate child of container
					if ( !item ) {
						return;
					}
				}

				var source = getParent( item );
				if ( !source ||
					o.invalid( item, handle ) || !o.moves( item, source, handle, nextEl( item ) ) ) {
					return;
				}

				return {
					item: item,
					source: source
				};
			}

			function start( context ) {
				shared.sourceItem = shared.item = context.item;
				shared.source = context.source;
				shared.initialSibling = shared.currentSibling = nextEl( context.item );

				if ( g( o.copy, [ context.item, context.source ] ) ) {
					// http://api.jquery.com/clone/#clone-withDataAndEvents-deepWithDataAndEvents
					shared.item = angular.element( context.item ).clone( o.copy === 'events', o.copy === 'events' )[0];
					shared.copy = o.copy;
					if ( o.scope ) {
						o.scope.$emit( o.eventNames.dragularcloned, shared.item, context.item );
					}
				} else {
					shared.copy = false;
				}

				// prepare models operations
				var containerIndex = getContainers( o ).indexOf( context.source );
				shared.sourceModel = getContainersModel( o )[ containerIndex ];

				shared.sourceFilteredModel = getContainersFilteredModel( o )[ containerIndex ];
				shared.initialIndex = domIndexOf( context.item, context.source );

				drake.dragging = true;
				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragulardrag, shared.sourceItem, shared.source );
				}

				return true;
			}

			function manualStart( item ) {
				var context = canStart( item );
				if ( context ) {
					shared.grabbed = context;
					eventualMovements();
					//start(context);
				}
			}

			function renderMirrorImage() {
				if ( shared.mirror ) {
					return;
				}
				var rect = shared.sourceItem.getBoundingClientRect();
				shared.mirror = shared.sourceItem.cloneNode( true );
				shared.mirrorWidth = rect.width;
				shared.mirrorHeight = rect.height;
				shared.mirror.style.width = getRectWidth( rect ) + 'px';
				shared.mirror.style.height = getRectHeight( rect ) + 'px';
				addClass( shared.mirror, o.classes.mirror );
				o.mirrorContainer.appendChild( shared.mirror );
				regEvent( _docElm, 'on', 'mousemove', drag );
				addClass( _doc.body, o.classes.unselectable );
				regEvent( shared.mirror, 'on', 'wheel', scrollContainer );
				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragularcloned, shared.mirror, shared.sourceItem );
				}
			}

			function end() {
				if ( !drake.dragging || !shared.item ) {
					return;
				}
				drop( shared.item, getParent( shared.item ) );
			}

			function ungrab() {
				shared.grabbed = false;
				eventualMovements( 'remove' );
				movements( 'remove' );
			}


			// ====================================================================================================================================
			// Drag stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function drag( e ) { // watch performance!! - function is running each mousemove!
				if ( !shared.mirror ) {
					return;
				}
				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery environment
				}

				// update coordinates
				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				// count mirror coordinates
				var x = shared.clientX - shared.offsetX,
					y = shared.clientY - shared.offsetY,
					pageX,
					pageY,
					offsetBox;

				// fill extra properties if boundingBox is used
				if ( o.boundingBox ) {
					pageX = getCoord( 'pageX', e );
					pageY = getCoord( 'pageY', e );
					offsetBox = getOffset( o.boundingBox );
				}

				if ( !o.lockY ) {
					if ( !o.boundingBox || (pageX > offsetBox.left + shared.offsetX && pageX < offsetBox.right + shared.offsetXr) ) {
						shared.mirror.style.left = x + 'px';
					} else if ( o.boundingBox ) { // check again in case user scrolled the view
						if ( pageX < offsetBox.left + shared.offsetX ) {
							shared.mirror.style.left = shared.clientX - (pageX - offsetBox.left) + 'px';
						} else {
							shared.mirror.style.left = shared.clientX - shared.mirrorWidth - (pageX - offsetBox.right) + 'px';
						}
					}
				}
				if ( !o.lockX ) {
					if ( !o.boundingBox || (pageY > offsetBox.top + shared.offsetY && pageY < offsetBox.bottom + shared.offsetYb) ) {
						shared.mirror.style.top = y + 'px';
					} else if ( o.boundingBox ) { // check again in case user scrolled the view
						if ( pageY < offsetBox.top + shared.offsetY ) {
							shared.mirror.style.top = shared.clientY - (pageY - offsetBox.top) + 'px';
						} else {
							shared.mirror.style.top = shared.clientY - shared.mirrorHeight - (pageY - offsetBox.bottom) + 'px';
						}
					}
				}

				var elementBehindCursor = getElementBehindPoint( shared.mirror, shared.clientX, shared.clientY ),
					dropTarget = findDropTarget( elementBehindCursor, shared.clientX, shared.clientY ),
					changed = dropTarget !== shared.lastDropTarget;

				if ( elementBehindCursor !== shared.lastElementBehindCursor ) {
					fireEvent( elementBehindCursor, shared.dragOverEvents.dragularenter, !!dropTarget );
					if ( shared.lastElementBehindCursor ) {
						fireEvent( shared.lastElementBehindCursor, shared.dragOverEvents.dragularleave, elementBehindCursor );
					}
					shared.lastElementBehindCursor = elementBehindCursor;
				}

				if ( changed ) {
					if ( shared.lastDropTarget ) {
						moved( 'out' );
					}
					shared.lastDropTarget = dropTarget;
					moved( 'over' );
				}

				// do not copy in same container
				if ( dropTarget === shared.source && shared.copy && !g( o.copySortSource ) ) {
					if ( getParent( shared.item ) ) {
						shared.item.parentNode.removeChild( shared.item );
					}
					return;
				}

				var reference,
					immediate = getImmediateChild( dropTarget, elementBehindCursor );

				if ( immediate !== null ) {
					reference = getReference( dropTarget, immediate, shared.clientX, shared.clientY );
				} else if ( g( o.revertOnSpill ) === true && !shared.copy ) {
					// the case that mirror is not over valid target and reverting is on and copy is off
					reference = shared.initialSibling;
					dropTarget = shared.source;
				} else {
					// the case that mirror is not over valid target and removing is on or copy is on
					if ( shared.copy && getParent( shared.item ) ) {
						// remove item or copy of item
						shared.item.parentNode.removeChild( shared.item );
					}
					return;
				}

				if ( (reference === null && changed) ||
					reference !== shared.item &&
					reference !== nextEl( shared.item ) &&
					reference !== shared.currentSibling ) {
					// moving item/copy to new container from previous one
					shared.currentSibling = reference;

					dropTarget.insertBefore( shared.item, reference ); // if reference is null item is inserted at the end

					if ( o.scope ) {
						o.scope.$emit( o.eventNames.dragularshadow, shared.item, dropTarget, e );
					}
				}

				function moved( type ) {
					if ( o.scope ) {
						notify( o.scope );
					}

					if ( shared.targetCtx && shared.targetCtx.o.scope && shared.targetCtx.o.scope !== o.scope ) {
						notify( shared.targetCtx.o.scope );
					}

					if ( g( o.removeOnSpill ) === true ) {
						type === 'over' ? spillOver() : spillOut();
					}

					function notify( scope ){
						scope.$emit( o.eventNames[ 'dragular' + type ], shared.item, shared.lastDropTarget, shared.source, e );
					}
				}
			}

			// find valid drop container
			function findDropTarget( elementBehindCursor, clientX, clientY ) {  // watch performance!! - running each move!
				var target = elementBehindCursor,
					targetCtx = null;

				while ( target && !accepted() ) {
					target = getParent( target );
				}

				// bugfix #148 model not updated on spill
				// added target condition to fix #161
				if ( target && targetCtx ){
					shared.targetCtx = targetCtx;
				}

				return target;

				function accepted() {

					if ( !isContainer( target ) ) { // is not droppable?
						return false;
					}

					var immediate = getImmediateChild( target, elementBehindCursor ),
						reference = getReference( target, immediate, clientX, clientY ),
						initial = isInitialPlacement( target, reference ),
						i = o.nameSpace.length,
						nameSpace;

					while ( i-- ) { // for each namespace
						nameSpace = o.nameSpace[ i ];
						if ( shared.containers[ nameSpace ].indexOf( target ) !== -1 ) {
							targetCtx = getTargetCtx( nameSpace );
							break;
						}
					}

					// shared.target must be actual (used for scroll functionality)
					shared.target = target;

					if ( initial ) {

						return true; // accepts = true;

					} else {

						// try to find target in default set of containers
						if ( !targetCtx ) {
							targetCtx = getTargetCtx( 'dragularCommon' );
						}

						// if found and containersModel is dynamic, retrieve model
						if ( targetCtx && _isFunction( targetCtx.o.containersModel ) ) {
							// fix targetCtx.m(odel) for dynamic containersModel
							targetCtx.m = getContainersModel( targetCtx.o )[ getContainers( targetCtx.o ).indexOf( target ) ];
						}

						if ( targetCtx && // target container is defined via service or directive
							targetCtx.o.accepts && !targetCtx.o.accepts( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex ) ) {

							return false;

						} else if ( o.isContainer && // target container is recognized via o.isContainer
							o.isContainerAccepts && !o.isContainerAccepts( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex ) ) {

							return false;

						}

						return !o.canBeAccepted || o.canBeAccepted( shared.item, target, shared.source, reference, shared.sourceModel, shared.initialIndex );

					}

				}

				function getTargetCtx( nameSpace ) {
					return shared.containersCtx[ nameSpace ] && shared.containersCtx[ nameSpace ][ shared.containers[ nameSpace ].indexOf( target ) ];
				}
			}

			function spillOver() {
				rmClass( shared.item, o.classes.hide );
			}

			function spillOut() {
				if ( drake.dragging ) {
					addClass( shared.item, o.classes.hide );
				}
			}

			// is item currently placed in original container and original position?
			function isInitialPlacement( target, s ) { // watch performance - running each move several times!
				var sibling = s !== undefined ? s : (shared.mirror ? shared.currentSibling : nextEl( shared.item ));
				return target === shared.source && sibling === shared.initialSibling;
			}

			function getImmediateChild( dropTarget, target ) { // watch performance - running each move several times!
				var immediate = target;
				while ( immediate !== dropTarget && getParent( immediate ) !== dropTarget ) {
					immediate = getParent( immediate );
				}
				if ( immediate === _docElm ) {
					return null;
				}
				return immediate;
			}

			function getReference( dropTarget, target, x, y ) { // watch performance - running each move several times!
				var horizontal = o.direction === 'horizontal';
				return target !== dropTarget ? inside() : outside();

				function outside() { // slower, but able to figure out any position
					var len = dropTarget.children.length,
						i, el, rect;
					for ( i = 0; i < len; i++ ) {
						el = dropTarget.children[ i ];
						rect = el.getBoundingClientRect();
						if ( horizontal && rect.left > x ) {
							return el;
						}
						if ( !horizontal && rect.top > y ) {
							return el;
						}
					}
					return null;
				}

				function inside() { // faster, but only available if dropped inside a child element
					var rect = target.getBoundingClientRect();
					if ( horizontal ) {
						return resolve( x > rect.left + getRectWidth( rect ) / 2 );
					}
					return resolve( y > rect.top + getRectHeight( rect ) / 2 );
				}

				function resolve( after ) {
					return after ? nextEl( target ) : target;
				}
			}

			function getElementBehindPoint( point, x, y ) { // watch performance!! - function is running each mousemove!
				var p = point || {},
					state = p.className,
					el;
				p.className += ' ' + o.classes.hide;
				el = _doc.elementFromPoint( x, y );
				p.className = state;
				return el;
			}

			function isContainer( el ) {

				if ( !el ) {
					return false;
				}

	      if ( getContainers( o ).indexOf( el ) > -1) {
	        return true;
	      }

				var i = o.nameSpace.length;
				while ( i-- ) {

					if ( shared.containers[ o.nameSpace[ i ] ].indexOf( el ) !== -1 ) {
						return true;
					}
				}

				if ( o.isContainer( el ) ) {

					shared.tempModel = o.isContainerModel( el );
					return true;
				} else {

					shared.tempModel = null;
				}
				return false;
			}

			function getContainers( opt ) {

				return _getContainers( 'containers', opt );
			}

			function getContainersModel( opt ) {

				return _getContainers( 'containersModel', opt, true );
			}

			function getContainersFilteredModel( opt ) {

				return _getContainers( 'containersFilteredModel', opt, true );
			}

			function _getContainers( containersType, opt, to2d ) {

				return _isFunction( opt[ containersType ] ) ? sanitizeContainers(
					opt[ containersType ](
						(opt === o ? drake : null),
						shared
					),
					to2d,
					opt.scope
				) : opt[ containersType ];
			}

			function cancel( revert ) {
				if ( !drake.dragging ) {
					return;
				}
				var reverts = arguments.length > 0 ? revert : g( o.revertOnSpill ),
					parent = getParent( shared.item );

				var initial = isInitialPlacement( parent );
				if ( !initial && !shared.copy && reverts ) {
					shared.source.insertBefore( shared.item, shared.initialSibling );
				}
				if ( shared.sourceModel && !shared.copy && !reverts ) {
					drop( shared.item, parent );
				} else if ( o.scope ) {
					if ( initial || reverts ) {
						o.scope.$emit( o.eventNames.dragularcancel, shared.item, shared.source, shared.sourceModel, shared.initialIndex );
					}
				}

				if ( !shared.sourceModel || shared.copy || reverts || initial ) {
					cleanup();
				}
			}


			// ====================================================================================================================================
			// Release stage: ------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function release( e ) {

				ungrab();
				if ( !drake.dragging ) {
					return;
				}
				if ( e.originalEvent ) {
					e = e.originalEvent; // jQuery enviroment
				}

				shared.clientX = getCoord( 'clientX', e );
				shared.clientY = getCoord( 'clientY', e );

				var elementBehindCursor = getElementBehindPoint( shared.mirror, shared.clientX, shared.clientY ),
					dropTarget = findDropTarget( elementBehindCursor, shared.clientX, shared.clientY );

				if ( dropTarget && ((shared.copy && g( o.copySortSource )) || (!shared.copy || dropTarget !== shared.source)) ) {
					// found valid target and (is not copy case or target is not initial container)
					drop( shared.item, dropTarget );
				} else if ( g( o.removeOnSpill ) ) {
					remove();
				} else {
					cancel();
				}

				// after release there is no container hovered
				shared.target = null;

				if ( shared.lastElementBehindCursor ) {
					fireEvent( shared.lastElementBehindCursor, shared.dragOverEvents.dragularrelease, elementBehindCursor );
				}

				if ( o.scope ) {
					o.scope.$emit( o.eventNames.dragularrelease, shared.item, shared.source, e );
				}
			}

			function drop( item, target ) {
				if ( !item ) { // https://github.com/luckylooke/dragular/issues/102
					cleanup();
					return;
				}
				var sourceItem = shared.sourceItem,
					currentSibling = shared.currentSibling,
					dropIndex = domIndexOf( item, target );

				if ( shared.copy && target === shared.source && getParent( item ) && g( o.copySortSource ) ) {
					item.parentNode.removeChild( shared.sourceItem );
				}

				if ( shared.sourceModel && !isInitialPlacement( target ) ) {
					if ( shared.targetCtx && shared.targetCtx.fm ) { // target has filtered model
						// convert index from index-in-filteredModel to index-in-model
						dropIndex = shared.targetCtx.m.indexOf( shared.targetCtx.fm[ dropIndex ] );
					}
					if ( shared.sourceFilteredModel ) { // source has filtered model
						// convert index from index-in-filteredModel to index-in-model
						shared.initialIndex = shared.sourceModel.indexOf( shared.sourceFilteredModel[ shared.initialIndex ] );
					}
					$rootScope.$applyAsync( function applyDrop() {
						if ( !shared.sourceModel ) {
							return;
						}
						if ( target === shared.source ) {
							shared.sourceModel.splice( dropIndex, 0, shared.sourceModel.splice( shared.initialIndex, 1 )[ 0 ] );
						} else {
							shared.dropElmModel = shared.copy && !o.dontCopyModel ? angular.copy( shared.sourceModel[ shared.initialIndex ] ) : shared.sourceModel[ shared.initialIndex ];

							if ( !shared.tempModel ) {
								shared.targetModel = ( shared.targetCtx && shared.targetCtx.m ) || shared.sourceModel;
							} else {
								shared.targetModel = shared.tempModel;
							}

							item.parentNode.removeChild( item ); // element must be removed for ngRepeat to apply correctly

							if ( !shared.copy ) {
								shared.sourceModel.splice( shared.initialIndex, 1 );
							}

							if ( shared.targetModel ) {
								shared.targetModel.splice( dropIndex, 0, shared.dropElmModel );
							}
						}

						// removing element, as protection against duplicates, angular ng-repeat will create new item according to model
						if ( getParent( item ) ) {
							item.parentNode.removeChild( item );
						}

						afterDrop();
					} );
				} else {
					afterDrop();
				}

				function afterDrop() {

					// in nested containers case, new containers doesnt have registered mousedown
					getContainers( o ).forEach( function readdMouseDown( container ) {
						regEvent( container, 'off', 'mousedown', grab );
						regEvent( container, 'on', 'mousedown', grab );
					} );

					if ( o.compileItemOnDrop ) {
						var scope = angular.element( target ).scope ? angular.element( target ).scope() : o.scope;
						if ( scope ) {
							scope.$applyAsync( function () {
								var content = $compile( shared.copy ? sourceItem.cloneNode( true ) : sourceItem )( scope );
								if ( item.parentNode === target ) {
									target.removeChild( item );
								}
								target.insertBefore( content[ 0 ], currentSibling );
								cleanup();
							} );
						}
					}

					if ( o.scope ) {
						notify( o.scope );
					}

					if ( shared.targetCtx && shared.targetCtx.o.scope && shared.targetCtx.o.scope !== o.scope ) {
						notify( shared.targetCtx.o.scope );
					}

					if ( !o.compileItemOnDrop ) {
						cleanup();
					}

					function notify( scope ){
						if ( isInitialPlacement( target ) ) {
							scope.$emit( o.eventNames.dragularcancel, item, shared.source, shared.sourceModel, shared.initialIndex );
						} else {
							scope.$emit( o.eventNames.dragulardrop, item, target, shared.source, shared.sourceModel, shared.initialIndex, shared.targetModel, dropIndex );
						}
					}
				}
			}

			function remove() {
				if ( !drake.dragging ) {
					return;
				}
				var parent = getParent( shared.item );

				if ( parent ) {
					parent.removeChild( shared.item );
				}

				if ( shared.sourceModel ) {
					$rootScope.$applyAsync( function removeModel() {
						shared.sourceModel.splice( shared.initialIndex, 1 );
						cleanup();
					} );
				}

				if ( o.scope ) {
					o.scope.$emit( shared.copy ? o.eventNames.dragularcancel : o.eventNames.dragularremove, shared.item, parent, shared.sourceModel, shared.initialIndex );
				}
				if ( !shared.sourceModel ) {
					cleanup();
				}
			}

			function cleanup() {
				ungrab();
				removeMirrorImage();

				if ( shared.item ) {
					rmClass( shared.item, o.classes.transit );
				}

				drake.dragging = false;

				if ( g( o.removeOnSpill ) === true ) {
					spillOut();
				}

				if ( o.scope ) {
					if ( shared.lastDropTarget ) {
						o.scope.$emit( o.eventNames.dragularout, shared.item, shared.lastDropTarget, shared.source );
					}
					o.scope.$emit( o.eventNames.dragulardragend, shared.item );
				}

				shared.source = shared.item = shared.sourceItem = shared.initialSibling = shared.currentSibling = shared.sourceModel = null;
				shared.initialIndex = shared.currentIndex = shared.lastDropTarget = shared.tempModel = shared.targetModel = null;
				shared.dropElmModel = shared.targetCtx = shared.copy = shared.moveX = shared.moveY = null;
			}

			function destroy() {

				registerEvents( true );
				removeContainers( o.containers );
				release( {} );
			}

			function addContainers( containers, containersModel, containersFilteredModel ) {

	      if (!containers) {
	        return;
	      }

	      containersModel = containersModel || getContainersModel( o ) || {};
	      containersFilteredModel = containersFilteredModel || getContainersFilteredModel( o ) || {};
	      containers = _isArray( containers ) ? containers : makeArray( containers );
	      containers.forEach( function forEachContainer( container ) {

	        angular.forEach( o.nameSpace, function forEachNs( nameSpace ) {
	          if (shared.containers[ nameSpace ].indexOf( container ) > -1) {
	            return;
	          }

	          var newIndex = shared.containers[ nameSpace ].push( container ) - 1;
	          shared.containersCtx[ nameSpace ].push({
	            o: o,
	            m: containersModel[ newIndex ], // can be undefined
	            fm: containersFilteredModel[ newIndex ] // can be undefined
	          });

	          regEvent( container, 'off', 'mousedown', grab );
						regEvent( container, 'on', 'mousedown', grab );
	        } );
	      } );
	    }

			function removeContainers( containers ) {

				$rootScope.$applyAsync( function applyDestroyed() {

					containers = _isArray( containers ) ? containers : makeArray( containers );
					containers.forEach( function forEachContainer( container ) {

						angular.forEach( o.nameSpace, function forEachNs( nameSpace ) {

							var index;
							index = shared.containers[ nameSpace ].indexOf( container );
							shared.containers[ nameSpace ].splice( index, 1 );
							shared.containersCtx[ nameSpace ].splice( index, 1 );
						} );
					} );
				} );
			}

			function scrollContainer( e ) {
				if ( shared.target ) {
					if ( e.originalEvent ) {
						e = e.originalEvent; // jQuery enviroment
					}
					var before = shared.target.scrollTop;
					shared.target.scrollTop += e.deltaY;
					// block scroll of the document when container can be scrolled
					if ( before !== shared.target.scrollTop ) {
						e.stopPropagation();
						e.preventDefault();
					}
				}
			}

			function removeMirrorImage() {
				if ( shared.mirror ) {
					rmClass( _doc.body, o.classes.unselectable );
					regEvent( _docElm, 'off', 'mousemove', drag );
					regEvent( shared.mirror, 'off', 'wheel', scrollContainer );
					if ( getParent( shared.mirror ) ) {
						shared.mirror.parentNode.removeChild( shared.mirror );
					}
					shared.mirror = null;
				}
			}


			// ====================================================================================================================================
			// Other fns: -------------------------------------------------------------------------------------------------------------------------
			// ====================================================================================================================================


			function depSanitize( containersModel ) {
				console.warn( 'Deprecated method drake.sanitizeContainersModel! Will be removed in next major release! Please use sanitizeContainers instead.' );
				sanitizeContainers( containersModel, true, o.scope );
			}

		} // end of service

		/****************************************************************************************************************************/
		/****************************************************************************************************************************/
		/****************************************************************************************************************************/

		// HELPERS FUNCTIONS:

		function sanitizeContainers( containers, to2d, scope ) {

			if ( _isFunction( containers ) ) {

				return containers;
			}
			else if ( _isArray( containers ) ) {

				if ( to2d ) {
					//                  |-------- is 2D array? -----------|
					return _isArray( containers[ 0 ] ) ? containers : [ containers ];
				}
				else {
					return containers;
				}
			}
			else if ( typeof containers === 'string' && scope ) {

				var evaluated = scope.$eval( containers );

				if ( _isFunction( evaluated ) ) {
					return evaluated;
				}
				else {
					return function () {
						return scope.$eval( containers );
					};
				}
			}
			else if ( containers ) {

				return makeArray( containers );
			}

			return [];
		}

		function regEvent( el, op, type, fn ) {
			var touch = {
					mouseup: 'touchend',
					mousedown: 'touchstart',
					mousemove: 'touchmove'
				},
				pointers = {
					mouseup: 'pointerup',
					mousedown: 'pointerdown',
					mousemove: 'pointermove'
				},
				microsoft = {
					mouseup: 'MSPointerUp',
					mousedown: 'MSPointerDown',
					mousemove: 'MSPointerMove'
				},
				$el = angular.element( el );

			if ( el.addEventListener ) {

				var opConvert = { on: 'addEventListener', off: 'removeEventListener' };
				el[ opConvert[ op ] ]( type, fn, { passive: false } );
				el[ opConvert[ op ] ]( touch[ type ], fn, { passive: false } );

			} else {

				if ( typeof navigator !== 'undefined' && navigator.pointerEnabled && pointers[ type ] ) {
					$el[ op ]( pointers[ type ], fn );
				} else if ( typeof navigator !== 'undefined' && navigator.msPointerEnabled && microsoft[ type ] ) {
					$el[ op ]( microsoft[ type ], fn );
				} else if ( touch[ type ] ) {
					$el[ op ]( touch[ type ], fn );
				}
				$el[ op ]( type, fn );

			}
		}

		function never() {
			return false;
		}

		function always() {
			return true;
		}

		// make array from array-like objects or from single element (based on bevacqua/atoa)
		function makeArray( all, startIndex ) {
			if ( _isArray( all ) ) {
				return all;
			}
			if ( all.length ) { // is array-like
				return Array.prototype.slice.call( all, startIndex ); // convert to vanilla js array
			} else { // is one element
				return [ all ];
			}
		}

		function whichMouseButton( e ) {
			if ( e.touches ) {
				return e.touches.length;
			}
			if ( e.originalEvent && e.originalEvent.touches ) {
				return e.originalEvent.touches.length;
			}
			if ( e.which !== void 0 && e.which !== 0 ) {
				return e.which;
			} // github.com/bevacqua/dragula/issues/261
			if ( e.buttons !== undefined ) {
				return e.buttons;
			}
			var button = e.button;
			if ( button !== undefined ) { // see github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
				return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
			}
		}

		function preventGrabbed( e ) {
			if ( e.originalEvent ) {
				e = e.originalEvent; // jQuery enviroment
			}
			if ( shared.grabbed ) {
				e.preventDefault();
			}
		}

		function getScroll( scrollProp, offsetProp ) {
			if ( typeof window[ offsetProp ] !== 'undefined' ) {
				return window[ offsetProp ];
			}
			if ( _docElm.clientHeight ) {
				return _docElm[ scrollProp ];
			}
			return _doc.body[ scrollProp ];
		}

		function getOffset( el ) { // watch performance!! - function is running each mousemove!
			var rect = el.getBoundingClientRect(),
				scrollTop = getScroll( 'scrollTop', 'pageYOffset' ),
				scrollLeft = getScroll( 'scrollLeft', 'pageXOffset' );
			return {
				left: rect.left + scrollLeft,
				right: rect.right + scrollLeft,
				top: rect.top + scrollTop,
				bottom: rect.bottom + scrollTop
			};
		}

		function getRectWidth( rect ) {
			return rect.width || (rect.right - rect.left);
		}

		function getRectHeight( rect ) {
			return rect.height || (rect.bottom - rect.top);
		}

		function getEmptyArray() {
			return [];
		}

		function nextEl( el ) {
			if ( !el ) { // https://github.com/luckylooke/dragular/issues/102
				return;
			}
			return el.nextElementSibling || manually();

			function manually() {
				var sibling = el;
				do {
					sibling = sibling.nextSibling;
				} while ( sibling && sibling.nodeType !== 1 );
				return sibling;
			}
		}

		//Cannot use angular.isElement because we need to check plain dom element, no jQlite wrapped
		function isElement( obj ) {
			return (
				typeof HTMLElement === 'object' ? obj instanceof HTMLElement : //DOM2
					obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string'
			);
		}

		function lookupClass( className ) {
			var cached = shared.classesCache[ className ];
			if ( cached ) {
				cached.lastIndex = 0;
			} else {
				shared.classesCache[ className ] = cached = new RegExp( '(?:^|\\s)' + className + '(?:\\s|$)', 'g' );
			}
			return cached;
		}

		function addClass( el, className ) {
			var current = el.className;
			if ( !current.length ) {
				el.className = className;
			} else if ( !lookupClass( className ).test( current ) ) {
				el.className += ' ' + className;
			}
		}

		function rmClass( el, className ) {
			el.className = el.className.replace( lookupClass( className ), ' ' ).trim();
		}

		function getEventHost( e ) {
			// on touchend event, we have to use `e.changedTouches`
			// see http://stackoverflow.com/questions/7192563/touchend-event-properties
			// see https://github.com/bevacqua/dragula/issues/34
			if ( e.targetTouches && e.targetTouches.length ) {
				return e.targetTouches[ 0 ];
			}
			if ( e.changedTouches && e.changedTouches.length ) {
				return e.changedTouches[ 0 ];
			}
			return e;
		}

		function getCoord( coord, e ) { // watch performance - running each move several times!
			var host = getEventHost( e );
			var missMap = {
				pageX: 'clientX', // IE8
				pageY: 'clientY' // IE8
			};
			if ( coord in missMap && !(coord in host) && missMap[ coord ] in host ) {
				coord = missMap[ coord ];
			}

			// Adding support for touch events, as they are not functional in the original
			if ( !host.type || host.type.indexOf( 'touch' ) < 0 ) {
				return host[ coord ];
			} else {
				if ( host.type.indexOf( 'end' ) === -1 ) {
					// No clientX or clientY in a touch event
					return host.originalEvent.touches[ 0 ][ coord.replace( 'client', 'page' ) ];
				}
				// Nothing should happen for touchend
				return false;
			}
		}

		function getParent( el ) { // watch performance!! - function is running each mousemove!
			return el.parentNode === document ? null : el.parentNode;
		}

		function isInput( el ) {
			return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable( el );
		}

		function isEditable( el ) {
			if ( !el ) {
				return false;
			} // no parents were editable
			if ( el.contentEditable === 'false' ) {
				return false;
			} // stop the lookup
			if ( el.contentEditable === 'true' ) {
				return true;
			} // found a contentEditable element in the chain
			return isEditable( getParent( el ) ); // contentEditable is set to 'inherit'
		}

		function domIndexOf( child, parent ) {
			return Array.prototype.indexOf.call( angular.element( parent ).children(), child );
		}

		function fireEvent( target, e, extra ) { // watch performance!! - function is running each mousemove!
			if ( !target ) {
				return;
			}
			shared.extra = extra;
			if ( target.dispatchEvent ) {
				target.dispatchEvent( e );
			} else {
				target.fireEvent( 'on' + e.eventType, e );
			}
		}

		function getBool( prop, args, context ) {
			if ( _isFunction( prop ) ) {
				return !!prop.apply( context || this, args || shared );
			} else {
				return !!prop;
			}
		}

	};

	dragularService.$inject = [ '$rootScope', '$compile' ];

	module.exports = dragularService;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var examplesRouter = function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/home');

	  var timer,
	    ctrl = function routerCtrl($state, $stateParams, $timeout) {
	      // go to install notes by default
	      if (!$stateParams.link) {
	        timer = $timeout(function timer() {
	          $state.go('docs.detail', {
	            link: 'docsInstall'
	          });
	        },0);
	      }else{
	        $timeout.cancel(timer);
	      }
	    };

	  ctrl.$inject = ['$state', '$stateParams', '$timeout'];

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/partials/partial-home.html'
	    })
	    .state('docs', {
	      url: '/docs',
	      templateUrl: '/partials/partial-docs.html',
	      controller: ctrl
	    })
	    .state('docs.detail', {
	      url: '/:link',
	      templateUrl: function($stateParams) {
	        return '/' + $stateParams.link + '/' + $stateParams.link + '.html';
	      },
	      controller: ctrl
	    })
	    .state('contribute', {
	      url: '/contribute',
	      templateUrl: '/partials/partial-contribute.html'
	    });
	};

	examplesRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

	module.exports = examplesRouter;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	var BasicCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService('.container-vertical');
	};

	BasicCtrl.$inject = ['$element', 'dragularService'];

	module.exports = BasicCtrl;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	var BasicModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items1 = [{
	    content: 'Move me, but you can only drop me in one of these containers.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.items2 = [{
	    content: 'Item 5'
	  }, {
	    content: 'Item 6'
	  }, {
	    content: 'Item 7'
	  }, {
	    content: 'Item 8'
	  }];
	  var containers = $element.children().eq(0).children();
	  dragularService.cleanEnviroment();
	  // var drake = dragularService([containers[0],containers[1]],{
	  // dragularService([containers[0]],{
	  dragularService([containers[0], containers[1]],{
	    containersModel: [$scope.items1, $scope.items2],
	      // canBeAccepted: function () {
	      //     return false;
	      // },
	      // accepts: function () {
	      //     return false;
	      // },
	      // isContainer: function (el) {
	      //     return el.id == 'test';
	      // },
	      // isContainerModel: function () {
	      //     return $scope.items2;
	      // }
	      // scope: $scope
	  });

		// $scope.$on('dragularcloned', myFn('cloned'));
		// $scope.$on('dragulardrag', myFn('drag'));
		// $scope.$on('dragularcancel', myFn('cancel'));
		// $scope.$on('dragulardrop', myFn('drop'));
		// $scope.$on('dragularremove', myFn('remove'));
		// $scope.$on('dragulardragend', myFn('dragend'));
		// $scope.$on('dragularshadow', myFn('shadow'));
		//
		// function myFn(eventName) {
		// 	return function() {
		// 		console.log(eventName, arguments, drake);
		// 	};
		// }

	};

	BasicModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = BasicModelCtrl;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	var BoundingBoxCtrl = function ($element, dragularService) {
	  var boundingBox = $element[0];
	  dragularService.cleanEnviroment();

	  dragularService($element.children(), {
	    boundingBox: boundingBox
	  });
	};

	BoundingBoxCtrl.$inject = ['$element', 'dragularService'];

	module.exports = BoundingBoxCtrl;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	var BoundingBoxLockXCtrl = function ($element, dragularService) {
	  var boundingBox = $element.children().children()[0];
	  dragularService.cleanEnviroment();
	  dragularService(boundingBox, {
	    boundingBox: boundingBox,
	    lockX: true
	  });
	};

	BoundingBoxLockXCtrl.$inject = ['$element', 'dragularService'];

	module.exports = BoundingBoxLockXCtrl;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	var BoundingBoxLockYCtrl = function ($element, dragularService) {
	  var boundingBox = $element.children().children()[0];
	  dragularService.cleanEnviroment();
	  dragularService(boundingBox, {
	    boundingBox: boundingBox,
	    lockY: true
	  });
	};

	BoundingBoxLockYCtrl.$inject = ['$element', 'dragularService'];

	module.exports = BoundingBoxLockYCtrl;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	var CopyCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService($element.children(), {
	    copy: true
	  });
	};

	CopyCtrl.$inject = ['$element', 'dragularService'];

	module.exports = CopyCtrl;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	var CopyModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items1 = [{
	    content: 'Move me, and make copy on drop.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.items2 = [{
	    content: 'Item 5'
	  }, {
	    content: 'Item 6'
	  }, {
	    content: 'Item 7'
	  }, {
	    content: 'Item 8'
	  }];
	  var containers = $element.children().eq(0).children();
	  dragularService.cleanEnviroment();
	  dragularService([containers[0],containers[1]],{
	    containersModel: [$scope.items1, $scope.items2],
	    copy: true
	  });
	};

	CopyModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = CopyModelCtrl;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var CustomClassesCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService($element.children(), {
	    classes: {
	      mirror: 'custom-green-mirror'
	    }
	  });
	};

	CustomClassesCtrl.$inject = ['$element', 'dragularService'];

	module.exports = CustomClassesCtrl;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	var DifferentOptionsModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items1 = [{
	    content: 'Move me, but you can only drop me in one of these containers.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.items2 = [{
	    content: 'Item 5'
	  }, {
	    content: 'Item 6'
	  }, {
	    content: 'Item 7'
	  }, {
	    content: 'Item 8'
	  }];

	  var containerLeft = document.querySelector('#containerLeft'),
	    containerRight = document.querySelector('#containerRight');

	  function accepts(el, target, source) {
	    // left->right || in same container
	    if (source === containerLeft || source === target) {
	      return true;
	    }
	  }

	  dragularService.cleanEnviroment();
	  dragularService([containerLeft], {
	    containersModel: [$scope.items1],
	    copy: true,
	    copySortSource: true,
	    //move only from left to right
	    accepts: accepts
	  });

	  dragularService([containerRight], {
	    containersModel: [$scope.items2],
	    removeOnSpill: true,
	    //move only from left to right
	    accepts: accepts
	  });

	};

	DifferentOptionsModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = DifferentOptionsModelCtrl;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	var DirectiveCtrl = function ($scope) {
	  $scope.dragularOptions = {
	    classes: {
	      mirror: 'custom-green-mirror'
	    },
	    nameSpace: 'same' // just connecting left and right container
	  };
	};

	DirectiveCtrl.$inject = ['$scope'];

	module.exports = DirectiveCtrl;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	var DirectiveModelCtrl = function ($scope) {
	  $scope.items1 = [{
	    content: 'Move me, and make copy on drop.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.items2 = [{
	    content: 'Item 5'
	  }, {
	    content: 'Item 6'
	  }, {
	    content: 'Item 7'
	  }, {
	    content: 'Item 8'
	  }];
	  $scope.dragularOptions = {
	    containersModel: $scope.items1,
	    classes: {
	      mirror: 'custom-green-mirror'
	    },
	    nameSpace: 'common' // just connecting left and right container
	  };
	};

	DirectiveModelCtrl.$inject = ['$scope'];

	module.exports = DirectiveModelCtrl;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/* global angular */
	'use strict';

	var DragOverEventsCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService([$element.children()[0], $element.children()[2]], {
	    nameSpace: 'apples'
	  });
	  dragularService([$element.children()[1], $element.children()[3]], {
	    nameSpace: 'oranges'
	  });

	  // containers events handling
	  function registerEvents(el) {
	    el.on('dragularenter', function(e) {
	      if (el[0] === e.target) { // filter bubbled
	        el.addClass(dragularService.shared.extra ? 'gu-over-accept' : 'gu-over-decline');
	      }
	    });
	    el.on('dragularleave dragularrelease', function(e) {
	      if ((el[0] === e.target && // filter bubbled
	        dragularService.shared.extra && // extra on dragleave contains element the drag is leaving to
	        dragularService.shared.extra.parentElement !== e.target) || // is that element child of this container?
	        e.type === 'dragularrelease') {
	        el.removeClass('gu-over-accept');
	        el.removeClass('gu-over-decline');
	      }
	    });
	  }

	  angular.forEach($element.children(), function forEachChild(el) {
	    registerEvents(angular.element(el));
	  });

	  // notContainer events handling
	  var notContainer = angular.element(document.getElementsByClassName('notContainer'));
	  notContainer.on('dragularenter', function() {
	    notContainer.addClass('gu-over');
	  });
	  notContainer.on('dragularleave dragularrelease', function() {
	    notContainer.removeClass('gu-over');
	  });
	};

	DragOverEventsCtrl.$inject = ['$element', 'dragularService'];

	module.exports = DragOverEventsCtrl;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	var EventsCtrl = function ($scope, $element, dragularService, $timeout) {
	  dragularService.cleanEnviroment();
	  
	  var drake = dragularService($element.children(), {
	    scope: $scope
	  });
	  $scope.$on('dragulardrag', function(e, el) {
	    e.stopPropagation();
	    el.className = el.className.replace(' ex-moved', '');
	  });
	  $scope.$on('dragulardrop', function(e, el) {
	    e.stopPropagation();
	    $timeout(function() {
	      el.className += ' ex-moved';
	    }, 0);
	  });

	  $scope.$on('dragularcloned', myFn('cloned in EventsCtrl'));
	  $scope.$on('dragulardrag', myFn('drag in EventsCtrl'));
	  $scope.$on('dragularcancel', myFn('cancel in EventsCtrl'));
	  $scope.$on('dragulardrop', myFn('drop in EventsCtrl'));
	  $scope.$on('dragularremove', myFn('remove in EventsCtrl'));
	  $scope.$on('dragulardragend', myFn('dragend in EventsCtrl'));
	  $scope.$on('dragularshadow', myFn('shadow in EventsCtrl'));

	  function myFn(eventName) {
	    return function() {
	      console.log(eventName, arguments, drake);
	    };
	  }
	};

	var Events2Ctrl = function ($scope, $element, dragularService, $timeout) {
	  var drake = dragularService($element.children(), {
	    scope: $scope
	  });
	  $scope.$on('dragulardrag', function(e, el) {
	    e.stopPropagation();
	    el.className = el.className.replace(' ex-moved', '');
	  });
	  $scope.$on('dragulardrop', function(e, el) {
	    e.stopPropagation();
	    $timeout(function() {
	      el.className += ' ex-moved';
	    }, 0);
	  });

	  $scope.$on('dragularcloned', myFn('cloned in Events2Ctrl'));
	  $scope.$on('dragulardrag', myFn('drag in Events2Ctrl'));
	  $scope.$on('dragularcancel', myFn('cancel in Events2Ctrl'));
	  $scope.$on('dragulardrop', myFn('drop in Events2Ctrl'));
	  $scope.$on('dragularremove', myFn('remove in Events2Ctrl'));
	  $scope.$on('dragulardragend', myFn('dragend in Events2Ctrl'));
	  $scope.$on('dragularshadow', myFn('shadow in Events2Ctrl'));

	  function myFn(eventName) {
	    return function() {
	      console.log(eventName, arguments, drake);
	    };
	  }
	};

	EventsCtrl.$inject = ['$scope', '$element', 'dragularService', '$timeout'];
	Events2Ctrl.$inject = ['$scope', '$element', 'dragularService', '$timeout'];

	module.exports = [EventsCtrl, Events2Ctrl];


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	var HandleCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
		dragularService($element.children(), {
	    moves: function(el, container, handle) {
	      return handle.classList.contains('handle');
	    }
	  });
	};

	HandleCtrl.$inject = ['$element', 'dragularService'];

	module.exports = HandleCtrl;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	var IsContainerModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items1 = [{
	    content: 'Move me, but you can only drop me in one of these containers.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.cartModel = [];

	  var containerLeft = document.querySelector('#containerLeft');

	  dragularService.cleanEnviroment();
	  dragularService([containerLeft], {
	    containersModel: [$scope.items1],
	    copy: true,
	    isContainer: function isContainer (el) {
	      return el.id === 'cart';
	    },
	    isContainerModel: function getModel (){
	      return $scope.cartModel;
	    }
	  });

	  $scope.removeItem = function removeItem() {
	    var index = $scope.cartModel.indexOf(this.item);
	    $scope.cartModel.splice(index, 1);
	  };
	};

	IsContainerModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = IsContainerModelCtrl;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	var NameSpacesCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService([$element.children()[0], $element.children()[2]], {
	    nameSpace: 'apples'
	  });
	  dragularService($element.children()[1], {
	    nameSpace: 'oranges'
	  });
	  dragularService($element.children()[3], { // mixed
	    nameSpace: ['oranges', 'apples']
	  });
	};

	NameSpacesCtrl.$inject = ['$element', 'dragularService'];

	module.exports = NameSpacesCtrl;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	var NestedNgRepeatCtrl = function ($timeout, $scope, $element, dragularService) {
	  $timeout(function() { // timeount due to ngRepeat to be ready
	    dragularService.cleanEnviroment();
	    dragularService($element, {
	      nameSpace: 'rows',
	      moves: function rowOnly (el, container, handle) {
	        return handle.classList.contains('row-handle');
	      }
	    });

	    dragularService($element.children(), {
	      nameSpace: 'cells',
	      moves: function excludeHandle (el, container, handle) {
	        return !handle.classList.contains('row-handle');
	      }
	    });
	  }, 0);
	  $scope.items = [{
	    items: [{
	      content: 'Item a1'
	    }, {
	      content: 'Item a2'
	    }, {
	      content: 'Item a3'
	    }, {
	      content: 'Item a4'
	    }]
	  }, {
	    items: [{
	      content: 'Item b1'
	    }, {
	      content: 'Item b2'
	    }, {
	      content: 'Item b3'
	    }, {
	      content: 'Item b4'
	    }]
	  }, {
	    items: [{
	      content: 'Item c1'
	    }, {
	      content: 'Item c2'
	    }, {
	      content: 'Item c3'
	    }, {
	      content: 'Item c4'
	    }]
	  }];
	};

	NestedNgRepeatCtrl.$inject = ['$timeout', '$scope', '$element', 'dragularService'];

	module.exports = NestedNgRepeatCtrl;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	var NestedNgRepeatWithModelCtrl = function ($timeout, $scope, $element, dragularService) {
	  $timeout(function() { // timeount due to nested ngRepeat to be ready
	    var rowsContainer = $element.children().eq(0).children(),
	      rows = getRows(),
	      cellContainers = getCellContainers();

	    dragularService.cleanEnviroment();
	    dragularService(rowsContainer, {
	      moves: function(el, container, handle) {
	        return handle.classList.contains('row-handle');
	      },
	      containersModel: $scope.rows,
	      nameSpace: 'rows'
	    });

	    var cellContainersDrake = dragularService(cellContainers, {
	      moves: function(el, container, handle) {
	        return handle.classList.contains('example-cell');
	      },
	      containersModel: getcellContainersModel(),
	      nameSpace: 'cells'
	    });

	    $scope.addItem = function(row) {
	      var item = {
	        content: 'Item x' + Math.round( Math.random() * 1000 )
	      }
	      row.items.push( item );
	    }

	    $scope.removeItem = function(row, item) {
	      row.items.splice( row.items.indexOf( item ), 1);
	    }

	    $scope.addRow = function() {
	      var row = { items: [] };
	      $scope.rows.push( row );
	      // wait for angular to create element for added row
	      $scope.$evalAsync(function() {
	        // $evalAsync is probably not enough to get after the DOM creation, so timeouted :/
	        $timeout(function() {
	          // you can provide all containers, dragular will add just new containers
	          cellContainersDrake.addContainers( getCellContainers(), getcellContainersModel());
	        }, 500);
	      });
	    }

	    $scope.removeRow = function( row, e ) {
	      var cellsContainerElm = e.target.parentElement.parentElement.querySelectorAll('.container-nested')[0];
	      cellContainersDrake.removeContainers( cellsContainerElm );
	      $scope.rows.splice( $scope.rows.indexOf( row ), 1 );
	    }

	    function getRows() {
	      return rowsContainer.children();
	    }

	    function getCellContainers() {
	      var tmpContainers = [];
	      rows = getRows();
	      for (var i = 0; i < rows.length; i++) {
	        var cellContainer = rows.eq(i).children()[1];
	        if ( cellContainer ) {
	          tmpContainers.push( cellContainer );
	        }
	      }
	      return tmpContainers;
	    }

	    function getcellContainersModel(){
	        var parent = $scope.rows,
	          containersModel = [];
	        for (var i = 0; i < parent.length; i++) {
	          containersModel.push(parent[i].items);
	        }
	        return containersModel;
	      }

	  }, 0);

	  $scope.rows = [{
	    items: [{
	      content: 'Item a1'
	    }, {
	      content: 'Item a2'
	    }, {
	      content: 'Item a3'
	    }, {
	      content: 'Item a4'
	    }]
	  }, {
	    items: [{
	      content: 'Item b1'
	    }, {
	      content: 'Item b2'
	    }, {
	      content: 'Item b3'
	    }, {
	      content: 'Item b4'
	    }]
	  }, {
	    items: [{
	      content: 'Item c1'
	    }, {
	      content: 'Item c2'
	    }, {
	      content: 'Item c3'
	    }, {
	      content: 'Item c4'
	    }]
	  }];
	};

	NestedNgRepeatWithModelCtrl.$inject = ['$timeout', '$scope', '$element', 'dragularService'];

	module.exports = NestedNgRepeatWithModelCtrl;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	var NgRepeatCtrl = function ($scope, $element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService($element.children());
	  $scope.items = [{
	    content: 'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.'
	  }, {
	    content: 'Item 2'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.addItem = function addItem() {
	    var index = $scope.items.indexOf(this.item) + 1;
	    $scope.items.splice(index, 0, {
	      content: this.item.content + '-copy'
	    });
	  };
	  $scope.removeItem = function removeItem() {
	    var index = $scope.items.indexOf(this.item);
	    $scope.items.splice(index, 1);
	  };
	};

	NgRepeatCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = NgRepeatCtrl;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	var NgRepeatFilteredWithModelCtrl = function ($scope, $element, dragularService, $filter) {
	  $scope.items1 = [{
	    content: 'Move me, but you can only drop me in one of these containers.'
	  }, {
	    content: 'If you try to drop me somewhere other than these containers, I\'ll just come back.'
	  }, {
	    content: 'Apple 3'
	  }, {
	    content: 'Orange 4'
	  }, {
	    content: 'Orange 5'
	  }, {
	    content: 'Apple 6'
	  }, {
	    content: 'Apple 7'
	  }, {
	    content: 'Apple 8'
	  }];
	  $scope.items2 = [{
	    content: 'Apple 9'
	  }, {
	    content: 'Orange 10'
	  }, {
	    content: 'Orange 11'
	  }, {
	    content: 'Apple 12'
	  }, {
	    content: 'Orange 13'
	  }, {
	    content: 'Apple 14'
	  }];
	  $scope.filter1query = 'Orange';
	  $scope.filter2query = 'Orange';
	  $scope.filteredModel1 = [];
	  $scope.filteredModel2 = [];
	  $scope.getFilteredModel = function (filteredModel, items, filterQuery) {
	    filteredModel.length = 0;
	    /*
	    * Following one-liner is same like:
	    *   var filteredModelTemp = $filter('filter')(items, filterQuery);
	    *   angular.forEach(filteredModelTemp, function(item){
	    *     filteredModel.push(item);
	    *   });
	    * Or like:
	    *   var filteredModelTemp = $filter('filter')(items, filterQuery);
	    *   for(var i; i < filteredModelTemp.length; i++){
	    *     filteredModel.push(filteredModelTemp[i]);
	    *   }
	    *
	    * You cannot just assign filtered array to filteredModel like this:
	    *   filteredModel = $filter('filter')(items, filterQuery);
	    * Because you would replace the array object you provide to dragular with new one.
	    * So dragular will continue to use the one it was provided on init.
	    * Hopefully I make it clear. :)
	     */
	    [].push.apply(filteredModel, $filter('filter')(items, filterQuery));

	    // Example with orderBy filter:
	    //   var tmp = [];
	    //   [].push.apply(tmp, $filter('filter')(items, filterQuery));
	    //   [].push.apply(filteredModel, $filter('orderBy')(tmp, '+content'));

	      return filteredModel;
	  };
	  var containers = $element.children().eq(1).children();
	  dragularService.cleanEnviroment();
	  dragularService([containers[0],containers[1]],{
	    containersModel: [$scope.items1, $scope.items2],
	    containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]
	  });
	};

	NgRepeatFilteredWithModelCtrl.$inject = ['$scope', '$element', 'dragularService', '$filter'];

	module.exports = NgRepeatFilteredWithModelCtrl;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	var NgRepeatWithModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items = [{
	    content: 'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.'
	  }, {
	    content: 'Item 2'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  dragularService.cleanEnviroment();
	  dragularService($element.children().eq(0).children(), {containersModel: $scope.items});
	  $scope.addItem = function addItem() {
	    var index = $scope.items.indexOf(this.item) + 1;
	    $scope.items.splice(index, 0, {
	      content: this.item.content + '-copy'
	    });
	  };
	  $scope.removeItem = function removeItem() {
	    var index = $scope.items.indexOf(this.item);
	    $scope.items.splice(index, 1);
	  };
	};

	NgRepeatWithModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = NgRepeatWithModelCtrl;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	var RemoveOnSpillCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
		dragularService($element.children(), {
	    removeOnSpill: true
	  });
	};

	RemoveOnSpillCtrl.$inject = ['$element', 'dragularService'];

	module.exports = RemoveOnSpillCtrl;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	var RemoveOnSpillWithModelCtrl = function ($scope, $element, dragularService) {
	  $scope.items1 = [{
	    content: 'Move me, but you can only drop me in containers.'
	  }, {
	    content: 'If you try to drop me somewhere other than containers, I\'ll die a fiery death.'
	  }, {
	    content: 'Item 3'
	  }, {
	    content: 'Item 4'
	  }];
	  $scope.items2 = [{
	    content: 'You can drop me in the left container.'
	  }, {
	    content: 'Item 6'
	  }, {
	    content: 'Item 7'
	  }, {
	    content: 'Item 8'
	  }];
	  var containers = $element.children().eq(0).children();
	  dragularService.cleanEnviroment();
	  dragularService([containers[0], containers[1]], {
	    containersModel: [$scope.items1, $scope.items2],
	    removeOnSpill: true
	  });
	};

	RemoveOnSpillWithModelCtrl.$inject = ['$scope', '$element', 'dragularService'];

	module.exports = RemoveOnSpillWithModelCtrl;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	var RevertOnSpillCtrl = function ($element, dragularService) {
	  dragularService.cleanEnviroment();
	  dragularService($element.children(), {
	    revertOnSpill: true
	  });
	};

	RevertOnSpillCtrl.$inject = ['$element', 'dragularService'];

	module.exports = RevertOnSpillCtrl;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/* global angular */
	'use strict';

	var ScrollingDragCtrl = function ($interval, $element, dragularService) {
	  var timer,
	    leftScrollContainer = document.getElementById('leftScroll'),
	    rightScrollContainer = document.getElementById('rightScroll'),
	    leftTopBar = document.getElementById('leftTopBar'),
	    leftBottomBar = document.getElementById('leftBottomBar'),
	    rightTopBar = document.getElementById('rightTopBar'),
	    rightBottomBar = document.getElementById('rightBottomBar');

	  dragularService.cleanEnviroment();
	  dragularService([leftScrollContainer, rightScrollContainer]);

	  registerEvents(leftTopBar, leftScrollContainer, -5);
	  registerEvents(leftBottomBar, leftScrollContainer, 5);
	  registerEvents(rightTopBar, rightScrollContainer, -5);
	  registerEvents(rightBottomBar, rightScrollContainer, 5);

	  function registerEvents(bar, container, inc, speed) {
	    if (!speed) {
	      speed = 20;
	    }
	  angular.element(bar).on('dragularenter', function() {
	    container.scrollTop += inc;
	    timer = $interval(function moveScroll() {
	        container.scrollTop += inc;
	      }, speed);
	    });
	    angular.element(bar).on('dragularleave dragularrelease', function() {
	      $interval.cancel(timer);
	    });
	  }
	};

	ScrollingDragCtrl.$inject = ['$interval', '$element', 'dragularService'];

	module.exports = ScrollingDragCtrl;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/* global angular */
	'use strict';

	NestedRepeatsWithCustomDirective.$inject = ['dragularService', '$element', '$scope', '$timeout'];

	angular.module('examplesApp')
		.directive('questionDirective', QuestionsDirective)
		.controller('QuestionsController', QuestionsController);

	module.exports = NestedRepeatsWithCustomDirective;



	function NestedRepeatsWithCustomDirective( dragularService, $element, $scope, $timeout) {

		dragularService.cleanEnviroment();

		$scope.items = [
			{
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 1,
				name: 'x',
				age: '1'
			},
			{
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 2,
				name: 'y',
				age: '2'
			}, {
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 3,
				name: 'z',
				age: '3'
			},
			{
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 1,
				name: 'x',
				age: '4'
			}, {
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 2,
				name: 'y',
				age: '5'
			}, {
				questions:[
					{
						text: 'text1',
						points: 1
					},
					{
						text: 'text2',
						points: 2
					},
					{
						text: 'text3',
						points: 3
					}
				],
				order: 3,
				name: 'z',
				age: '6'
			}];

		// timeout due to document not ready, jsfiddle settings issue?
		$timeout(function() {

			dragularService('#items', {
				containersModel: 'items',
				scope: $scope,
				moves: function itemsOnly (el, container, handle) {
					return handle.classList.contains('item');
				},
				nameSpace:'items'
			});

			$scope.$on('dragulardrop', function(){
				$scope.items.forEach(function(item, index){
					item.order = index + 1;
				});
			});

		});

	}

	function QuestionsDirective() {
		return {
			restrict    : 'E',
			template : '<div class="all-data"><div class="subitem" ng-repeat="subitem in question">{{subitem.points}}. {{subitem.text}}</div></div>',
			controller  : 'QuestionsController',
			scope       : {
				question: '='
			}
		};
	}

	function QuestionsController($scope, dragularService, $element) {

		dragularService( $element.children('.all-data'), {
			containersModel: 'question',
			scope: $scope,
			nameSpace: 'subitem',
			moves: function subItemsOnly (el, container, handle) {
				return handle.classList.contains('subitem');
			}
		});

		$scope.$on('dragulardrop', function(){
			$scope.question.forEach(function(item, index){
				item.points = index + 1;
			});
		});
	}



/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/docsInstall/docsInstall.html","<h2>Install</h2>\n<p>download dragular.js and dragular.css from dist folder</p>\n<p>OR clone git</p>\n<pre><code>\ngit clone http://github.com/luckylooke/dragular.git\n</code></pre>\n<p>OR use npm</p>\n<pre><code>\n[sudo] npm install dragular\n</code></pre>\n<p>OR use bower</p>\n<pre><code>\nbower install dragular\n</code></pre>\n<p>AND include files into your project</p>\n<pre><code>\n&lt;link href=\'styles/dragular.css\' rel=\'stylesheet\' type=\'text/css\' /&gt;\n&lt;script src=\'scripts/dragular.js\'&gt;&lt;/script&gt;\n</code></pre>\n<p>AND put dragularModule into dependency array</p>\n<pre><code>\nvar app = angular.module(\'myApp\', [\'dragularModule\', \'otherDependencies\']);\n</code></pre>\n<p>DONE :)</p>\n");
	$templateCache.put("/exampleBasic/exampleBasic.html","<div class=\'parent\'>\n  <h2>Basic</h2>\n  <label>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"Basic\">\n    <div class=\'container-vertical\'>\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'container-vertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div ng-click=\"clicked = !clicked\" ng-class=\"clicked && \'clickedClass\'\">Try to click me, dragular distinguish drag from click</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Basic\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService(\'.container-vertical\');\n  }])\n        </code>\n        <code>\n// CSS\n.clickedClass {\n  background-color: orange !important;\n}\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\n    &lt;div class=\'container-vertical\'&gt;\n        &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n        &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n        &lt;div&gt;Item 3.&lt;/div&gt;\n        &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'container-vertical\'&gt;\n        &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n        &lt;div ng-click=\"clicked = !clicked\" ng-class=\"clicked && \'clickedClass\'\"&gt;Try to click me, dragular distinguish drag from click&lt;/div&gt;\n        &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleBasicWithModel/exampleBasicWithModel.html","<div class=\'parent\'>\n  <h2>Basic - with model</h2>\n  <label>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n  <div class=\'wrapper\' ng-controller=\"BasicModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container-vertical\' id=\"test\">\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'container-vertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'BasicModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2]\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\n    &lt;div class=\'table-row\'&gt;\n        &lt;div class=\'container-vertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\'container-vertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items1:\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items2:\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleBoundingBox/exampleBoundingBox.html","        <div class=\'parent\'>\n            <h2>BoundingBox</h2>\n            <label>You can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBox\">\n                <div class=\'container-vertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 2.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div class=\'container-vertical\'>\n                    <div>This items cannot cross its example element, just try it your selves.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children(), {\n    boundingBox: $element\n  });\n        </code>\n      </pre>\n        </div>");
	$templateCache.put("/exampleBoundingBoxLockX/exampleBoundingBoxLockX.html","<div class=\'parent\'>\n            <h2>BoundingBox and lockX</h2>\n            <label>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockX\">\n                <div class=\'container-horizontal\'>\n                    <div class=\'boundingBox\'>\n                        <div class=\"width25\">Items are locked in X axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div class=\"width25\">item 2</div>\n                        <div class=\"width25\">item 3</div>\n                        <div class=\"width25\">item 4</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockX: true\n  });\n        </code>\n      </pre>\n        </div>");
	$templateCache.put("/exampleBoundingBoxLockY/exampleBoundingBoxLockY.html","        <div class=\'parent\'>\n            <h2>BoundingBox and LockY</h2>\n            <label>Movement can be locked to X or Y axis and also you can provide element in options.boundingBox to limit crossing element borders.</label>\n            <div class=\'wrapper\' ng-controller=\"BoundingBoxLockY\">\n                <div class=\'container-vertical\'>\n                    <div class=\'boundingBox\'>\n                        <div>Items are locked in Y axis movement and cannot cross its closest parent div.boundingBox, just try it your selves.</div>\n                        <div>item 2</div>\n                        <div>item 3</div>\n                        <div>item 4</div>\n                        <div>item 5</div>\n                        <div>item 6</div>\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([$element.children()[0].children(), {\n    boundingBox: $element.children()[0],\n    lockY: true\n  });\n        </code>\n      </pre>\n        </div>");
	$templateCache.put("/exampleCopy/exampleCopy.html","<div class=\'parent\'>\n  <h2>Copy</h2>\n  <label>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"Copy\" ng-hide=\"globals.showModelExamples\">\n    <div id=\'left2\' class=\'container-vertical\'>\n      <div>Move me, and make copy on drop.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n    </div>\n    <div id=\'right2\' class=\'container-vertical\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Copy\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService($element.children(), {\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Copy&quot; ng-hide=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div id=\'left2\' class=\'container-vertical\'&gt;\n      &lt;div&gt;Move me, and make copy on drop.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div id=\'right2\' class=\'container-vertical\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleCopyWithModel/exampleCopyWithModel.html","<div class=\'parent\'>\n  <h2>Copy - with model</h2>\n  <label>Copying stuff is great too.</label>\n  <div class=\'wrapper\' ng-controller=\"CopyModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <div>Items1:\n          <pre>\n            {{ items1 | json }}\n          </pre>\n        </div>\n      </div>\n      <div class=\'container-vertical\'>\n        <div>Items2:\n          <pre>\n            {{ items2 | json }}\n          </pre>\n        </div>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'CopyModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().children();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      copy: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;CopyModel&quot; ng-show=&quot;globals.showModelExamples&quot;&gt;\n    &lt;div class=\'table-row\'&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;container&quot;&gt;\n        &lt;div&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleCustomClasses/exampleCustomClasses.html","<div class=\'parent\'>\n    <h2>Custom classes</h2>\n    <label>You can overwrite buildin classes by providing classes names in object via options.classes.</label>\n    <div class=\'wrapper\' ng-controller=\"CustomClasses\">\n        <div id=\'left4\' class=\'container-vertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'container-vertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { classes: {\n    mirror: \'custom-green-mirror\'\n  } });\n\n  // Default classes are:\n  option.classes = {\n    mirror: \'gu-mirror\',\n    hide: \'gu-hide\',\n    unselectable: \'gu-unselectable\',\n    transit: \'gu-transit\',\n    overActive: \'gu-over-active\',\n    overAccepts: \'gu-over-accept\',\n    overDeclines: \'gu-over-decline\'\n  };\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleDifferentOptionsWithModel/exampleDifferentOptionsWithModel.html","<div class=\'parent\'>\n  <h2>Different options - with model</h2>\n  <label>You may need to setup different options (rules) for each container. For such setup you need to initialize each container separately. <b>Do not initialize same container twice!</b> In example bellow you can copy from left to right, but not otherwise. And from right container items can be removed on spill.</label>\n  <div class=\'wrapper\' ng-controller=\"DifferentOptionsModel\">\n    <div class=\'table-row\'>\n      <div id=\"containerLeft\" class=\'container-vertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div id=\"containerRight\" class=\'container-vertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'container-vertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  .controller(\'DifferentOptionsModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n\n    var containerLeft = document.querySelector(\'#containerLeft\'),\n      containerRight = document.querySelector(\'#containerRight\');\n\n    function accepts(el, target, source) {\n      if (source === containerLeft || source === target) {\n        return true;\n      }\n    }\n\n    dragularService([containerLeft], {\n      containersModel: [$scope.items1],\n      copy: true,\n      //move only from left to right\n      accepts: accepts\n    });\n\n    dragularService([containerRight], {\n      containersModel: [$scope.items2],\n      removeOnSpill: true,\n      //move only from left to right\n      accepts: accepts\n    });\n\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;DifferentOptionsModel&quot;&gt;\n    &lt;div class=\'table-row\'&gt;\n      &lt;div id=&quot;containerLeft&quot; class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div id=&quot;containerRight&quot; class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleDirective/exampleDirective.html","<div class=\'parent\'>\n  <h2>Directive</h2>\n  <label>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"Directive\">\n    <div class=\'container-vertical\' dragular=\"dragularOptions\">\n      <div>Move me, but you can only drop me in one of these containers.</div>\n      <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n      <div>Item 3.</div>\n      <div>Item 6.</div>\n    </div>\n    <div class=\'container-vertical\' dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"same\"}\'>\n      <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n      <div>Item 4.</div>\n      <div>Item 5.</div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  controller(\'Directive\', [\'$scope\', \'dragularService\', function TodoCtrl($scope) {\n    $scope.dragularOptions = {\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Directive&quot;&gt;\n    &lt;div class=\'container-vertical\' dragular=&quot;dragularOptions&quot;&gt;\n      &lt;div&gt;Move me, but you can only drop me in one of these containers.&lt;/div&gt;\n      &lt;div&gt;If you try to drop me somewhere other than these containers, I\'ll just come back.&lt;/div&gt;\n      &lt;div&gt;Item 3.&lt;/div&gt;\n      &lt;div&gt;Item 6.&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'container-vertical\' dragular=\'{&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;same&quot;}\'&gt;\n      &lt;div&gt;You can drop me in the left container, otherwise I\'ll stay here.&lt;/div&gt;\n      &lt;div&gt;Item 4.&lt;/div&gt;\n      &lt;div&gt;Item 5.&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleDirectiveWithModel/exampleDirectiveWithModel.html","<div class=\'parent\'>\n  <h2>Directive - with model</h2>\n  <label>Same as custom classes example, but showing use of directive.</label>\n  <div class=\'wrapper\' ng-controller=\"DirectiveModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\' dragular=\"dragularOptions\">\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container-vertical\' dragular-model=\"items2\" dragular=\'{\"classes\":{\"mirror\":\"custom-green-mirror\"},\"nameSpace\":\"common\"}\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <div>Items1:\n          <br/>{{items1 | json}}</div>\n      </div>\n      <div class=\'container-vertical\'>\n        <div>Items2:\n          <br/>{{items2 | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n\n        <code>\n// JS\n  controller(\'DirectiveModel\', [\'$scope\', function TodoCtrl($scope) {\n    $scope.items1 = [{\n      content: \'Move me, and make copy on drop.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'Item 5\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    $scope.dragularOptions = {\n      containersModel: $scope.items1,\n      classes: {\n        mirror: \'custom-green-mirror\'\n      },\n      nameSpace: \'common\' // just connecting left and right container\n    };\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n &lt;div class=\'wrapper\' ng-controller=&quot;DirectiveModel&quot;&gt;\n  &lt;div class=\'container-vertical\' dragular=&quot;dragularOptions&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\'container-vertical\' dragular=\'{&quot;containersModel&quot;:&quot;items2&quot;,&quot;classes&quot;:{&quot;mirror&quot;:&quot;custom-green-mirror&quot;},&quot;nameSpace&quot;:&quot;common&quot;}\'&gt;\n    &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleDragOverEvents/exampleDragOverEvents.html","<div class=\'parent\'>\n  <h2>Drag-over events</h2>\n  <p>You can interact with dragging element by litening to dragOver events. Usually you want to containers show wheather they accepts element or not, but you can use it anywhere. DragOver events are: dragenter, dragleave and dragrelease. On dragOver events dragularService reveals several useful properties.</p>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-hover\">\n    <tr>\n      <td>dragularService.shared.item</td>\n      <td>item beeing dragged (it is copy of item if copy is enabled via options)</td>\n    </tr>\n    <tr>\n      <td>dragularService.shared.source</td>\n      <td>source container item is dragged from</td>\n    </tr>\n    <tr>\n      <td>dragularService.shared.sourceModel</td>\n      <td>source container model representation if model was porvided</td>\n    </tr>\n    <tr>\n      <td>dragularService.shared.initialIndex</td>\n      <td>original index of item, can be used to get item model from sourceModel</td>\n    </tr>\n    <tr>\n      <td>dragularService.shared.extra</td>\n      <td>contains accepting information (boolean) on dragenter, element drag is leaving to on dragleave and element behind the cursor on dragrelease</td>\n    </tr>\n  </table>\n</div>\n\n  <p> Try to drag over the not-container too.</p>\n  <div class=\'wrapper\' ng-controller=\"DragOverEvents\">\n    <div class=\'container-vertical width25\'>\n      <div>apples and oranges cannot be mixed</div>\n      <div>apple 2</div>\n      <div>apple 3</div>\n      <div>apple 4</div>\n    </div>\n    <div class=\'container-vertical width25\'>\n      <div>orange 1</div>\n      <div>orange 2</div>\n      <div>orange 3</div>\n      <div>orange 4</div>\n    </div>\n    <div class=\'container-vertical width25\'>\n      <div>apple 5</div>\n      <div>apple 6</div>\n      <div>apple 7</div>\n      <div>apple 8</div>\n    </div>\n    <div class=\'container-vertical width25\'>\n      <div>orange 5</div>\n      <div>orange 6</div>\n      <div>orange 7</div>\n      <div>orange 8</div>\n    </div>\n  </div>\n  <div class=\"notContainer gu-over-active\"> Test active class on NOT container.</div>\n\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;DragOverEvents&quot;&gt;\n    &lt;div class=\'container width25\'&gt;\n      &lt;div&gt;apples and oranges cannot be mixed&lt;/div&gt;\n      &lt;div&gt;apple 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25\'&gt;\n      &lt;div&gt;orange 1&lt;/div&gt;\n      &lt;div&gt;orange 2&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25\'&gt;\n      &lt;div&gt;apple 5&lt;/div&gt;\n      &lt;div&gt;apple 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n    &lt;div class=\'container width25\'&gt;\n      &lt;div&gt;orange 5&lt;/div&gt;\n      &lt;div&gt;orange 6&lt;/div&gt;\n      ...\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;notContainer&quot;&gt; Test active class on NOT container.&lt;/div&gt;\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // CSS\n\n.notContainer.gu-over {\n  background-color: yellow;\n}\n\n.container-vertical.gu-over-accept {\n  background-color: green;\n}\n\n.container-vertical.gu-over-decline {\n  background-color: red;\n}\n    </code>\n  </pre>\n\n  <pre>\n    <code>\n  // JS\n  controller(\'DragOverEvents\', [\'$element\', \'dragularService\', function TodoCtrl($element, dragularService) {\n    dragularService.cleanEnviroment();\n    dragularService([$element.children()[0], $element.children()[2]], {\n      nameSpace: \'apples\'\n    });\n    dragularService([$element.children()[1], $element.children()[3]], {\n      nameSpace: \'oranges\'\n    });\n\n    // containers events handling\n    function registerEvents(el) {\n      el.on(\'dragularenter\', function(e) {\n        if (el[0] === e.target) { // filter bubbled\n          el.addClass(dragularService.shared.extra ? \'gu-over-accept\' : \'gu-over-decline\');\n        }\n      });\n      el.on(\'dragularleave dragularrelease\', function(e) {\n        if ((el[0] === e.target && // filter bubbled\n          dragularService.shared.extra && // extra on dragleave contains element the drag is leaving to\n          dragularService.shared.extra.parentElement !== e.target) // is that element child of this container?\n          || e.type === \'dragularrelease\') {\n          el.removeClass(\'gu-over-accept\');\n          el.removeClass(\'gu-over-decline\');\n        }\n      });\n    }\n\n    angular.forEach($element.children(), function forEachChild(el) {\n      registerEvents(angular.element(el));\n    });\n\n    // notContainer events handling\n    var notContainer = angular.element(document.getElementsByClassName(\'notContainer\'));\n    notContainer.on(\'dragularenter\', function() {\n      notContainer.addClass(\'gu-over\');\n    });\n    notContainer.on(\'dragularleave dragularrelease\', function() {\n      notContainer.removeClass(\'gu-over\');\n    });\n  }])\n    </code>\n  </pre>\n</div>\n");
	$templateCache.put("/exampleEvents/exampleEvents.html","<div class=\'parent\'>\n    <h2>Events</h2>\n    <label>Add some fantastic events!</label><p>Events affecting more than on cotrollers are emitted on both scopes if provided.</p>\n    <h3>EventsCtrl</h3>\n    <div class=\'wrapper\' ng-controller=\"Events\">\n        <div id=\'left3\' class=\'container-vertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'container-vertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <hr>\n    <h3>Events2Ctrl</h3>\n    <div class=\'wrapper\' ng-controller=\"Events2\">\n        <div id=\'left3\' class=\'container-vertical\'>\n            <div>Move me, but you can only drop me in one of these containers.</div>\n            <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n            <div>Item 3.</div>\n            <div>Item 6.</div>\n        </div>\n        <div id=\'right3\' class=\'container-vertical\'>\n            <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n            <div>Item 4.</div>\n            <div>Item 5.</div>\n        </div>\n    </div>\n    <pre>\n        <code>\nvar EventsCtrl = function ($scope, $element, dragularService, $timeout) {\n\n  var drake = dragularService($element.children(), {\n    scope: $scope\n  });\n  $scope.$on(\'dragulardrag\', function(e, el) {\n    e.stopPropagation();\n    el.className = el.className.replace(\' ex-moved\', \'\');\n  });\n  $scope.$on(\'dragulardrop\', function(e, el) {\n    e.stopPropagation();\n    $timeout(function() {\n      el.className += \' ex-moved\';\n    }, 0);\n  });\n\n  $scope.$on(\'dragularcloned\', myFn(\'cloned in EventsCtrl\'));\n  $scope.$on(\'dragulardrag\', myFn(\'drag in EventsCtrl\'));\n  $scope.$on(\'dragularcancel\', myFn(\'cancel in EventsCtrl\'));\n  $scope.$on(\'dragulardrop\', myFn(\'drop in EventsCtrl\'));\n  $scope.$on(\'dragularremove\', myFn(\'remove in EventsCtrl\'));\n  $scope.$on(\'dragulardragend\', myFn(\'dragend in EventsCtrl\'));\n  $scope.$on(\'dragularshadow\', myFn(\'shadow in EventsCtrl\'));\n\n  function myFn(eventName) {\n    return function() {\n      console.log(eventName, arguments, drake);\n    };\n  }\n};\n\nvar Events2Ctrl = function ($scope, $element, dragularService, $timeout) {\n  var drake = dragularService($element.children(), {\n    scope: $scope\n  });\n  $scope.$on(\'dragulardrag\', function(e, el) {\n    e.stopPropagation();\n    el.className = el.className.replace(\' ex-moved\', \'\');\n  });\n  $scope.$on(\'dragulardrop\', function(e, el) {\n    e.stopPropagation();\n    $timeout(function() {\n      el.className += \' ex-moved\';\n    }, 0);\n  });\n\n  $scope.$on(\'dragularcloned\', myFn(\'cloned in Events2Ctrl\'));\n  $scope.$on(\'dragulardrag\', myFn(\'drag in Events2Ctrl\'));\n  $scope.$on(\'dragularcancel\', myFn(\'cancel in Events2Ctrl\'));\n  $scope.$on(\'dragulardrop\', myFn(\'drop in Events2Ctrl\'));\n  $scope.$on(\'dragularremove\', myFn(\'remove in Events2Ctrl\'));\n  $scope.$on(\'dragulardragend\', myFn(\'dragend in Events2Ctrl\'));\n  $scope.$on(\'dragularshadow\', myFn(\'shadow in Events2Ctrl\'));\n\n  function myFn(eventName) {\n    return function() {\n      console.log(eventName, arguments, drake);\n    };\n  }\n};\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleHandle/exampleHandle.html","<div class=\'parent\'>\n    <h2>Handle</h2>\n    <label>Drag handles float your cruise?</label>\n    <div class=\'wrapper\' ng-controller=\"Handle\">\n        <div id=\'left5\' class=\'container-vertical\'>\n            <div><span class=\'handle\'>+</span>Move me, but you can use the plus sign to drag me around.</div>\n        </div>\n        <div id=\'right5\' class=\'container-vertical\'>\n        </div>\n    </div>\n    <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], {\n    moves: function (el, container, handle) {\n      return handle.className === \'handle\';\n    }\n  });\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleIsContainerWithModel/exampleIsContainerWithModel.html","<div class=\'parent\'>\n  <h2>isContainer - with model</h2>\n  <label>Possible use case of <b>options.isContainer</b> combined with model. When you provide function <b>isContainer</b> and in case it returns true and you are providing models (<b>options.containersModel</b>), dragular check for model by calling <b>options.isContainerModel(el)</b> function. If not provided, model is discarted.</label>\n  <div class=\'wrapper\' ng-controller=\"IsContainerModel\">\n    <div class=\'table-row\'>\n      <div id=\"containerLeft\" class=\'container-vertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div id=\"cart\" class=\'container-vertical\'>\n        <div class=\'cursor-default\' ng-repeat=\"item in cartModel\">{{item.content}}\n        <button class=\'cursor-default\' ng-click=\"removeItem()\">x</button></div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'container-vertical\'>\n        <pre>Cart:\n          <br/>{{cartModel | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  .controller(\'IsContainerModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.cartModel = [];\n\n    var containerLeft = document.querySelector(\'#containerLeft\');\n\n    dragularService.cleanEnviroment();\n    dragularService([containerLeft], {\n      containersModel: [$scope.items1],\n      copy: true,\n      isContainer: function isContainer (el) {\n        return el.id === \'cart\';\n      },\n      isContainerModel: function getModel (){\n        return $scope.cartModel;\n      }\n    });\n\n    $scope.removeItem = function removeItem() {\n      var index = $scope.cartModel.indexOf(this.item);\n      $scope.cartModel.splice(index, 1);\n    };\n\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n &lt;div class=\'wrapper\' ng-controller=&quot;IsContainerModel&quot;&gt;\n    &lt;div class=\'table-row\'&gt;\n      &lt;div id=&quot;containerLeft&quot; class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div id=&quot;cart&quot; class=\'container-vertical\'&gt;\n        &lt;div class=\'cursor-default\' ng-repeat=&quot;item in cartModel&quot;&gt;{{item.content}}\n        &lt;button class=\'cursor-default\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Cart:\n          &lt;br/&gt;{{cartModel | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleNameSpaces/exampleNameSpaces.html","        <div class=\'parent\'>\n            <h2>NameSpaces</h2>\n            <label>Try to mix apples and oranges. You cannot place apples into oranges, but notice that you can place it into mixed. Mixed can be placed into apples and oranges. Notice that mixed becomes orange or apple if placed into their container. <b>So remember if you are using namespacing, then item is namespaced according to actual container it is placed in. If you need to item preserve thier state you need to use classes in combination with options.accepts and optionally options.isContainer.</b> It depends on setup. (See <a href=\"https://github.com/luckylooke/dragular/issues/9\">issue #9</a>.)</label>\n            <div class=\'wrapper\' ng-controller=\"NameSpaces\">\n                <div class=\'container-vertical width25\'>\n                    <div>try to mix oranges and apples</div>\n                    <div>apple 2</div>\n                    <div>apple 3</div>\n                    <div>apple 4</div>\n                </div>\n                <div class=\'container-vertical width25\'>\n                    <div>orange 1</div>\n                    <div>orange 2</div>\n                    <div>orange 3</div>\n                    <div>orange 4</div>\n                </div>\n                <div class=\'container-vertical width25\'>\n                    <div>apple 5</div>\n                    <div>apple 6</div>\n                    <div>apple 7</div>\n                    <div>apple 8</div>\n                </div>\n                <div class=\'container-vertical width25\'>\n                    <div>mixed 1</div>\n                    <div>mixed 2</div>\n                    <div>mixed 3</div>\n                    <div>mixed 4</div>\n                </div>\n            </div>\n            <pre>\n      <code>\ndragularService([$element.children()[0], $element.children()[2]], {\n  nameSpace: \'apples\'\n});\ndragularService($element.children()[1], {\n  nameSpace: \'oranges\'\n});\ndragularService($element.children()[3], { // mixed\n  nameSpace: [\'oranges\', \'apples\']\n});\n      </code>\n    </pre>\n        </div>");
	$templateCache.put("/exampleNestedNgRepeat/exampleNestedNgRepeat.html","<div class=\'parent\'>\n    <h2>Nested ngRepeat</h2>\n    <label> You can move whole rows by grabing row title, all items it selves. Try it out!\n        <hr/>\n        <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n        <hr/>\n    </label>\n    <div ng-controller=\"NestedNgRepeat\">\n        <div ng-repeat=\"item in items\" class=\'example-row\'>\n            <div class=\"row-handle\">Row {{$index}}</div>\n            <div ng-repeat=\"item in item.items\" class=\"example-cell\">{{item.content}}</div>\n        </div>\n    </div>\n    <pre>\n        <code>\n  // HTML\n\n  &lt;div ng-controller=&quot;Example15&quot;&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'example-row\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{$index}}&lt;/div&gt;\n      &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;example-cell&quot;&gt;{{item.content}}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // CSS\n\n  .example-row {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .example-cell {\n    flex-grow: 1;\n  }\n\n  .example-row,\n  .example-cell {\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n  }\n        </code>\n      </pre>\n    <pre>\n        <code>\n  // JS\n\n  .controller(\'NestedNgRepeat\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function NestedNgRepeatCtrl($timeout, $scope, $element, dragularService) {\n    $timeout(function() { // timeount due to ngRepeat to be ready\n      dragularService($element, {\n        nameSpace: \'rows\',\n        moves: function rowOnly (el, container, handle) {\n          return handle.classList.contains(\'row-handle\');\n        }\n      });\n      dragularService($element.children(), {\n        nameSpace: \'cells\',\n        moves: function excludeHandle (el, container, handle) {\n          return !handle.classList.contains(\'row-handle\');\n        }\n      });\n    }, 0);\n    $scope.items = [{\n      items: [{\n        content: \'Item a1\'\n      }, {\n        content: \'Item a2\'\n      }, {\n        content: \'Item a3\'\n      }, {\n        content: \'Item a4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item b1\'\n      }, {\n        content: \'Item b2\'\n      }, {\n        content: \'Item b3\'\n      }, {\n        content: \'Item b4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item c1\'\n      }, {\n        content: \'Item c2\'\n      }, {\n        content: \'Item c3\'\n      }, {\n        content: \'Item c4\'\n      }]\n    }];\n  }])\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleNestedNgRepeatWithModel/exampleNestedNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>Nested ngRepeat - with model</h2>\n  <label> You can move whole rows by grabing row title, all items it selves. Try it out!\n    <hr/>\n    <b>Old IE doesnt support Flexible Box Layout</b> so it can look weird. But in modern browsers it is awsome! Dragular will be working well also in old IE but you have to use different css for layout.\n    <hr/>\n  </label>\n  <div ng-controller=\"NestedNgRepeatWithModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"row in rows\" class=\'example-row\'>\n          <div class=\"row-handle\">Row {{::$index}}</div>\n          <div class=\"example-row container-nested\">\n            <div ng-repeat=\"item in row.items\" class=\"example-cell\">{{item.content}} <button class=\'cursor-default\' ng-click=\"removeItem(row, item)\">x</button></div>\n            <div><button class=\'cursor-default\' ng-click=\"addItem(row)\">+</button></div>\n          </div>\n          <div><button class=\'cursor-default\' ng-click=\"removeRow(row, $event)\">X</button></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <div>\n          <button class=\'cursor-default\' ng-click=\"addRow()\">add row</button>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>\n            <div>Rows:\n              <br/>{{rows | json}}</div>\n        </pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n&lt;!-- HTML --&gt;\n&lt;div ng-controller=&quot;NestedNgRepeatWithModel&quot;&gt;\n  &lt;div class=\'container-vertical\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot; class=\'example-row\'&gt;\n      &lt;div class=&quot;row-handle&quot;&gt;Row {{::$index}}&lt;/div&gt;\n      &lt;div class=&quot;example-row example-cell container-nested&quot;&gt;\n        &lt;div ng-repeat=&quot;item in item.items&quot; class=&quot;example-cell&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // CSS\n\n  .example-row {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .example-row,\n  .example-cell {\n    flex-grow: 1;\n    margin: 10px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n  }\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS\n.controller(\'NestedNgRepeatWithModel\', [\'$timeout\', \'$scope\', \'$element\', \'dragularService\', function NestedNgRepeatWithModelCtrl($timeout, $scope, $element, dragularService) {\n    $timeout(function() { // timeount due to nested ngRepeat to be ready\n      var container = $element.children().eq(0).children(),\n        parentContainers = container.children(),\n        nestedContainers = [];\n\n      dragularService(container, {\n        moves: function(el, container, handle) {\n          return handle.classList.contains(\'row-handle\');\n        },\n        containersModel: $scope.items,\n        nameSpace: \'rows\'\n      });\n\n      // collect nested contianers\n      for (var i = 0; i < parentContainers.length; i++) {\n        nestedContainers.push(parentContainers.eq(i).children()[1]);\n      }\n\n      dragularService(nestedContainers, {\n        moves: function(el, container, handle) {\n          return !handle.classList.contains(\'row-handle\');\n        },\n        containersModel: (function getNestedContainersModel(){\n          var parent = $scope.items,\n            containersModel = [];\n          for (var i = 0; i < parent.length; i++) {\n            containersModel.push(parent[i].items);\n          }\n          return containersModel;\n        })(),\n        nameSpace: \'cells\'\n      });\n    }, 0);\n    $scope.items = [{\n      items: [{\n        content: \'Item a1\'\n      }, {\n        content: \'Item a2\'\n      }, {\n        content: \'Item a3\'\n      }, {\n        content: \'Item a4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item b1\'\n      }, {\n        content: \'Item b2\'\n      }, {\n        content: \'Item b3\'\n      }, {\n        content: \'Item b4\'\n      }]\n    }, {\n      items: [{\n        content: \'Item c1\'\n      }, {\n        content: \'Item c2\'\n      }, {\n        content: \'Item c3\'\n      }, {\n        content: \'Item c4\'\n      }]\n    }];\n  }])\n    </code>\n  </pre>\n</div>\n");
	$templateCache.put("/exampleNestedRepeatsWithCustomDirective/exampleNestedRepeatsWithCustomDirective.html","<div class=\'app\' ng-controller=\"NestedRepeatsWithCustomDirective\">\n    <div id=\"items\" class=\"can-be-empty\">\n        <div class=\"item\" ng-repeat=\"item in items\">\n            {{item.order}}: ({{item.name}} + {{item.age}})\n            <div class=\"all-subitems\">\n                <question-directive question=\"item.questions\"></question-directive>\n                <!--             {{question.points}} + {{question.text}} -->\n            </div>\n        </div>\n    </div>\n</div>\n</div>");
	$templateCache.put("/exampleNgRepeat/exampleNgRepeat.html","        <div class=\'parent\'>\n            <h2>ngRepeat</h2>\n            <label>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n            <div class=\'wrapper\' ng-controller=\"NgRepeat\">\n                <div class=\'container-vertical\'>\n                    <div ng-repeat=\"item in items\">\n                        {{item.content}}\n                    </div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  // HTML:\n  &lt;div class=\'container-vertical\'&gt;\n    &lt;div ng-repeat=&quot;item in items&quot;&gt;\n      {{item.content}}\n    &lt;/div&gt;\n  &lt;/div&gt;\n\n  // JS:\n  dragularService($element.children());\n  $scope.items = [{\n    content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n  },{\n    content: \'Item 2\'\n  },{\n    content: \'Item 3\'\n  },{\n    content: \'Item 4\'\n  }];\n        </code>\n      </pre>\n        </div>\n");
	$templateCache.put("/exampleNgRepeatFilteredWithModel/exampleNgRepeatFilteredWithModel.html","<div class=\'parent\'>\n  <h2>Filtered ngRepeat - with model</h2>\n  <p>Move stuff between these two filtered containers. You can play with filter inputs to see that everything goes right.\n    <br/>\n    <b>Please notify the getFilteredModel function, it is necessery for not replacing the initial array object with new filtered one!</b></p>\n  <div class=\'wrapper\' ng-controller=\"NgRepeatFilteredWithModel\">\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <input ng-model=\"filter1query\" style=\"margin:10px 10px\">\n      </div>\n      <div class=\'container-vertical\'>\n        <input ng-model=\"filter2query\" style=\"margin:10px 10px\">\n      </div>\n    </div>\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in getFilteredModel(filteredModel1, items1, filter1query)\">{{item.content}}</div>\n      </div>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in getFilteredModel(filteredModel2, items2, filter2query)\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'container-vertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n  <pre>\n        <code>\n// JS\n  .controller(\'NgRepeatFilteredWithModel\', [\'$scope\', \'$element\', \'dragularService\', \'$filter\', function TodoCtrl($scope, $element, dragularService, $filter) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in one of these containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than these containers, I\\\'ll just come back.\'\n    }, {\n      content: \'Apple 3\'\n    }, {\n      content: \'Orange 4\'\n    }, {\n      content: \'Orange 5\'\n    }, {\n      content: \'Apple 6\'\n    }, {\n      content: \'Apple 7\'\n    }, {\n      content: \'Apple 8\'\n    }];\n    $scope.items2 = [{\n      content: \'Apple 9\'\n    }, {\n      content: \'Orange 10\'\n    }, {\n      content: \'Orange 11\'\n    }, {\n      content: \'Apple 12\'\n    }, {\n      content: \'Orange 13\'\n    }, {\n      content: \'Apple 14\'\n    }];\n    $scope.filter1query = \'Orange\';\n    $scope.filter2query = \'Orange\';\n    $scope.filteredModel1 = [];\n    $scope.filteredModel2 = [];\n    $scope.getFilteredModel = function (filteredModel, items, filterQuery) {\n      filteredModel.length = 0;\n      /*\n      * Following one-liner is same like:\n      *   var filteredModelTemp = $filter(\'filter\')(items, filterQuery);\n      *   angular.forEach(filteredModelTemp, function(item){\n      *     filteredModel.push(item);\n      *   });\n      * Or like:\n      *   var filteredModelTemp = $filter(\'filter\')(items, filterQuery);\n      *   for(var i; i < filteredModelTemp.length; i++){\n      *     filteredModel.push(filteredModelTemp[i]);\n      *   }\n      *\n      * You cannot just assign filtered array to filteredModel like this:\n      *   filteredModel = $filter(\'filter\')(items, filterQuery);\n      * Because you would replace the array object you provide to dragular with new one.\n      * So dragular will continue to use the one it was provided on init.\n      * Hopefully I make it clear. :)\n       */\n      [].push.apply(filteredModel, $filter(\'filter\')(items, filterQuery));\n      return filteredModel;\n    };\n    var containers = $element.children().eq(1).children();\n    dragularService.cleanEnviroment();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      containersFilteredModel: [$scope.filteredModel1, $scope.filteredModel2]\n    });\n  }]);\n\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n  &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatFilteredWithModel&quot;&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;input ng-model=&quot;filter1query&quot; style=&quot;margin:10px 10px&quot;&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;input ng-model=&quot;filter2query&quot; style=&quot;margin:10px 10px&quot;&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\'table-row\'&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in getFilteredModel(filteredModel1, items1, filter1query)&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in getFilteredModel(filteredModel2, items2, filter2query)&quot;&gt;{{item.content}}&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Items1:\n          &lt;br/&gt;{{items1 | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;pre&gt;Items2:\n          &lt;br/&gt;{{items2 | json}}&lt;/pre&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleNgRepeatWithModel/exampleNgRepeatWithModel.html","<div class=\'parent\'>\n  <h2>ngRepeat - with model</h2>\n  <label>Example of using ng-repeat with dragular and adding/removing items dynamicaly.</label>\n  <div class=\'wrapper\' ng-controller=\"NgRepeatWithModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items\">\n          {{item.content}}\n          <button class=\'cursor-default\' ng-click=\"addItem()\">+</button>\n          <button class=\'cursor-default\' ng-click=\"removeItem()\">x</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <div>Items:\n          <br/>{{items | json}}</div>\n      </div>\n    </div>\n  </div>\n  <pre>\n    <code>\n  // HTML:\n   &lt;div class=\'wrapper\' ng-controller=&quot;NgRepeatWithModel&quot;&gt;\n      &lt;div class=\'container-vertical\'&gt;\n        &lt;div ng-repeat=&quot;item in items&quot;&gt;\n          {{item.content}}\n          &lt;button class=\'cursor-default\' ng-click=&quot;addItem()&quot;&gt;+&lt;/button&gt;\n          &lt;button class=\'cursor-default\' ng-click=&quot;removeItem()&quot;&gt;x&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n    </code>\n  </pre>\n  <pre>\n    <code>\n  // JS:\n  controller(\'NgRepeatWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items = [{\n      content: \'Try to add or remove some elements (click on +- buttons), you will see that it is not problem for dragular.\'\n    }, {\n      content: \'Item 2\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    dragularService($element.children().eq(0).children(), {containersModel: $scope.items});\n    $scope.addItem = function addItem() {\n      var index = $scope.items.indexOf(this.item) + 1;\n      $scope.items.splice(index, 0, {\n        content: this.item.content + \'-copy\'\n      });\n    };\n    $scope.removeItem = function removeItem() {\n      var index = $scope.items.indexOf(this.item);\n      $scope.items.splice(index, 1);\n    };\n  }])\n    </code>\n  </pre>\n</div>\n");
	$templateCache.put("/exampleRemoveOnSpill/exampleRemoveOnSpill.html","        <div class=\'parent\'>\n            <h2>Remove on spill</h2>\n            <label>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\n            <div class=\'wrapper\' ng-controller=\"RemoveOnSpill\">\n                <div id=\'left\' class=\'container-vertical\'>\n                    <div>Move me, but you can only drop me in containers.</div>\n                    <div>If you try to drop me somewhere other than containers, I\'ll die a fiery death.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n                <div id=\'right\' class=\'container-vertical\'>\n                    <div>You can drop me in the left container.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(single)], { removeOnSpill: true });\n        </code>\n      </pre>\n        </div>");
	$templateCache.put("/exampleRemoveOnSpillWithModel/exampleRemoveOnSpillWithModel.html","<div class=\'parent\'>\n  <h2>Remove on spill - with model</h2>\n  <label>Need to be able to quickly delete stuff when it spills out of the chosen containers?</label>\n  <div class=\'wrapper\' ng-controller=\"RemoveOnSpillWithModel\">\n    <div class=\'table-row\'>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items1\">{{item.content}}</div>\n      </div>\n      <div class=\'container-vertical\'>\n        <div ng-repeat=\"item in items2\">{{item.content}}</div>\n      </div>\n    </div>\n    <div class=\"table-row\">\n      <div class=\'container-vertical\'>\n        <pre>Items1:\n          <br/>{{items1 | json}}</pre>\n      </div>\n      <div class=\'container-vertical\'>\n        <pre>Items2:\n          <br/>{{items2 | json}}</pre>\n      </div>\n    </div>\n  </div>\n   <pre>\n        <code>\n// JS\n  .controller(\'RemoveOnSpillWithModel\', [\'$scope\', \'$element\', \'dragularService\', function TodoCtrl($scope, $element, dragularService) {\n    $scope.items1 = [{\n      content: \'Move me, but you can only drop me in containers.\'\n    }, {\n      content: \'If you try to drop me somewhere other than containers, I\\\'ll die a fiery death.\'\n    }, {\n      content: \'Item 3\'\n    }, {\n      content: \'Item 4\'\n    }];\n    $scope.items2 = [{\n      content: \'You can drop me in the left container.\'\n    }, {\n      content: \'Item 6\'\n    }, {\n      content: \'Item 7\'\n    }, {\n      content: \'Item 8\'\n    }];\n    var containers = $element.children().eq(0).children();\n    dragularService.cleanEnviroment();\n    dragularService([containers[0],containers[1]],{\n      containersModel: [$scope.items1, $scope.items2],\n      removeOnSpill: true\n    });\n  }])\n        </code>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div class=\'wrapper\' ng-controller=&quot;Basic&quot;&gt;\n    &lt;div class=\'table-row\'&gt;\n        &lt;div class=\'container-vertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items1&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\'container-vertical\'&gt;\n            &lt;div ng-repeat=&quot;item in items2&quot;&gt;{{item.content}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;table-row&quot;&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items1:\n                &lt;br/&gt;{{items1 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;container&quot;&gt;\n            &lt;div&gt;Items2:\n                &lt;br/&gt;{{items2 | json}}&lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/exampleRevertOnSpill/exampleRevertOnSpill.html","        <div class=\'parent\'>\n            <h2>Revert on spill</h2>\n            <label>By default, dropping an element outside of any known containers will keep the element in the last place it hovered over. You can make elements go back home if they\'re dropped outside of known containers, too.</label>\n            <div class=\'wrapper\' ng-controller=\"RevertOnSpill\">\n                <div id=\'left4\' class=\'container-vertical\'>\n                    <div>Move me, but you can only drop me in one of these containers.</div>\n                    <div>If you try to drop me somewhere other than these containers, I\'ll just come back.</div>\n                    <div>Item 3.</div>\n                    <div>Item 6.</div>\n                </div>\n                <div id=\'right4\' class=\'container-vertical\'>\n                    <div>You can drop me in the left container, otherwise I\'ll stay here.</div>\n                    <div>Item 4.</div>\n                    <div>Item 5.</div>\n                </div>\n            </div>\n            <pre>\n        <code>\n  dragularService([document.getElementById(left), document.getElementById(right)], { revertOnSpill: true });\n        </code>\n      </pre>\n        </div>");
	$templateCache.put("/exampleScrollingDrag/exampleScrollingDrag.html","<div class=\'parent\'>\n  <h2>Scrolling drag</h2>\n  <label> Containers can be scrolled by hovering up/down bar near containers. Bars on right side are transparent and moved a bit over containers. It can be scrolled also by mouse wheel.\n  </label>\n  <div ng-controller=\"ScrollingDrag\">\n    <div class=\"container-vertical scrollingDrag\">\n      <div class=\"scrollBar\" id=\"leftTopBar\">up</div>\n      <div id=\"leftScroll\" class=\"scrollingDragInner\">\n        <div>Item 1.</div>\n        <div>Item 2.</div>\n        <div>Item 3.</div>\n        <div>Item 4.</div>\n        <div>Item 5.</div>\n        <div>Item 6.</div>\n        <div>Item 7.</div>\n        <div>Item 9.</div>\n        <div>Item 10.</div>\n        <div>Item 11.</div>\n        <div>Item 12.</div>\n        <div>Item 13.</div>\n      </div>\n      <div class=\"scrollBar\" id=\"leftBottomBar\">down</div>\n    </div>\n    <div class=\"container-vertical scrollingDrag\">\n      <div class=\"scrollBar\" id=\"rightTopBar\"></div>\n      <div id=\"rightScroll\" class=\"scrollingDragInner\">\n        <div>Item 1.</div>\n        <div>Item 2.</div>\n        <div>Item 3.</div>\n        <div>Item 4.</div>\n        <div>Item 5.</div>\n        <div>Item 6.</div>\n        <div>Item 7.</div>\n        <div>Item 9.</div>\n        <div>Item 10.</div>\n        <div>Item 11.</div>\n        <div>Item 12.</div>\n        <div>Item 13.</div>\n      </div>\n      <div class=\"scrollBar\" id=\"rightBottomBar\"></div>\n    </div>\n  </div>\n   <pre>\n        <code>\n// JS\ncontroller(\'ScrollingDrag\', [\'$interval\', \'$element\', \'dragularService\', function TodoCtrl($interval, $element, dragularService) {\n\n\n    var timer,\n      leftScrollContainer = document.getElementById(\'leftScroll\'),\n      rightScrollContainer = document.getElementById(\'rightScroll\'),\n      leftTopBar = document.getElementById(\'leftTopBar\'),\n      leftBottomBar = document.getElementById(\'leftBottomBar\'),\n      rightTopBar = document.getElementById(\'rightTopBar\'),\n      rightBottomBar = document.getElementById(\'rightBottomBar\');\n\n    dragularService.cleanEnviroment();\n    dragularService([leftScrollContainer, rightScrollContainer]);\n\n    registerEvents(leftTopBar, leftScrollContainer, -5);\n    registerEvents(leftBottomBar, leftScrollContainer, 5);\n    registerEvents(rightTopBar, rightScrollContainer, -5);\n    registerEvents(rightBottomBar, rightScrollContainer, 5);\n\n    function registerEvents(bar, container, inc, speed) {\n      if (!speed) {\n        speed = 20;\n      }\n      angular.element(bar).on(\'dragularenter\', function() {\n        container.scrollTop += inc;\n        timer = $interval(function moveScroll() {\n          container.scrollTop += inc;\n        }, speed);\n      });\n      angular.element(bar).on(\'dragularleave dragularrelease\', function() {\n        $interval.cancel(timer);\n      });\n    }\n  }])\n        </code>\n      </pre>\n      <pre>\n        <code>\n&lt;!-- HTML --&gt;\n&lt;div ng-controller=&quot;ScrollingDrag&quot;&gt;\n    &lt;div class=&quot;container-vertical scrollingDrag&quot;&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftTopBar&quot;&gt;up&lt;/div&gt;\n      &lt;div id=&quot;leftScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\n        &lt;div&gt;Item 1&lt;/div&gt;\n        &lt;div&gt;Item 2&lt;/div&gt;\n            ...\n      &lt;/div&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;leftBottomBar&quot;&gt;down&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;container-vertical scrollingDrag&quot;&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightTopBar&quot;&gt;up&lt;/div&gt;\n      &lt;div id=&quot;rightScroll&quot; class=&quot;scrollingDragInner&quot;&gt;\n        &lt;div&gt;Item 1&lt;/div&gt;\n        &lt;div&gt;Item 2&lt;/div&gt;\n            ...\n      &lt;/div&gt;\n      &lt;div class=&quot;scrollBar&quot; id=&quot;rightBottomBar&quot;&gt;down&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n        </code>\n      </pre>\n       <pre>\n        <code>\n// CSS\n.scrollingDrag {\n  width: 45%;\n  display: inline-block;\n}\n\n.scrollingDragInner {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n#rightTopBar,\n#rightBottomBar {\n  background: transparent;\n  position: relative;\n  height: 20px;\n}\n\n#rightTopBar {\n  top: 10px;\n}\n\n#rightBottomBar {\n  bottom: 10px;\n}\n\ndiv.scrollBar {\n  background: yellow;\n  text-align: center;\n  padding: 1px;\n}\n\n        </code>\n      </pre>\n</div>\n");
	$templateCache.put("/partials/partial-contribute.html","<div class=\'container\'>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <ng-include src=\"\'partials/autogenerated/contribute.html\'\"> </ng-include>\n    </div>\n  </div>\n</div>\n");
	$templateCache.put("/partials/partial-docs.html","<div class=\'container\'>\n  <div id=\"rowOffcanvas\" class=\"row row-offcanvas row-offcanvas-left\">\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\">\n      <div class=\"list-group\">\n        <a ng-repeat=\"example in examplesList\" ng-click=\"toggleSidebar()\" ui-sref=\"docs.detail({link:example.link})\" ui-sref-active=\"active\" class=\"list-group-item\">{{example.title}}</a>\n      </div>\n    </div>\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-xs-12 col-sm-9\">\n      <p class=\"pull-left visible-xs\">\n        <button type=\"button\" ng-click=\"toggleSidebar()\" class=\"btn btn-primary btn-xs\">Toggle nav</button>\n      </p>\n      <!-- docs.detail -->\n      <div ui-view onload=\"highlightCode()\"></div>\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
	$templateCache.put("/partials/partial-home.html","<div class=\'container\'>\n  <div class=\"row\">\n    <!--/.sidebar-offcanvas-->\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h1>DRAGULAR</h1>\n        <p>Angular drag&drop based on <a href=\"http://github.com/bevacqua/dragula\">dragula</a>.</p>\n        <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"docs\" role=\"button\">Live examples in docs</a></p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p>Browser support includes every sane browser and **IE7+**. <sub>_(Granted you polyfill the functional `Array` methods in ES5)_</sub></p>\n          <h2>Inspiration</h2>\n          <p>I am working on huge angular project and I am using several drag&drop libraries in it, one for UI, one for lists, etc.. I want to use one full-featured drag&drop library for whole project. As I could not find any suitable, I decided to create one. I have choosen great library <a href=\"http://github.com/bevacqua/dragula\">dragula</a> by <a href=\"https://github.com/bevacqua\">Nicolas Bevacqua</a> as my starting point, make it more angular and started to put features in it! If you wish light-weight angular version of dragula, there is <a href=\"http://github.com/bevacqua/angular-dragula\">official angular version of dragula</a>.</p>\n          <p><b>Actual version 4.6.0 is based on dragula 3.6.3 and tested with angular 1.5.5.</b></p>\n          <h2>Differences of dragular (against dragula)</h2>\n          <ul>\n            <li>replaced dragula crossvent with angulars event binding</li>\n            <li>replaced dragula contra.emitter with $scope.$emit if scope provided in options (options.scope)</li>\n            <li>provided as service or directive dragular where options can be passed via atribute dragular</li>\n            <li>automatic direction if not provided in options, instead of default vertical</li>\n            <li>accepting arraylike objects as containers array (jQuery, jQlite collections etc..)</li>\n            <li>accepting custom classes via option.classes</li>\n            <li>namespaced containers groups available via option.nameSpace (containers in same nameSpace cooperate)</li>\n            <li>boundingBox (dragging element can me moved only in specific area)</li>\n            <li>lockX/Y (dragging element can me moved only in specific direction)</li>\n            <li>DOM can be synced with scope model</li>\n            <li>support css selectors to define containers</li>\n            <li>added syntax highlighter to example codes</li>\n            <li>etc..</li>\n          </ul>\n          <h2>Todo</h2>\n          <ul>\n            <li>improve docs</li>\n          </ul>\n          <h2>Features</h2>\n          <ul>\n            <li>provided as service and also as directive</li>\n            <li>Super easy to set up</li>\n            <li>No bloated dependencies</li>\n            <li><strong>Figures out sort order</strong> on its own</li>\n            <li>A shadow where the item would be dropped offers <strong>visual feedback</strong></li>\n            <li>Touch events!</li>\n          </ul>\n          <h2>For installation, usage and examples go to <a ui-sref=\"docs\">docs</a></h2>\n        </div>\n      </div>\n      <!--/row-->\n    </div>\n    <!--/.col-xs-12.col-sm-9-->\n  </div>\n  <!--/row-->\n</div>\n");
	$templateCache.put("/partials/autogenerated/contribute.html","<h1 id=\"how-to-contribute\">How to contribute</h1>\n<p>It&#39;s important to us that you feel you can contribute towards the evolution of Dragular. This can take many forms: from helping to fix bugs or improve the docs, to adding in new features to the source. This guide should help you in making that process as smooth as possible.</p>\n<p>Before contributing, please read the <a href=\"https://github.com/luckylooke/dragular/blob/master/CODE_OF_CONDUCT.md\">code of conduct</a>.</p>\n<h2 id=\"reporting-issues\">Reporting issues</h2>\n<p><a href=\"https://github.com/luckylooke/dragular/issues\">GitHub Issues</a> is the place to report bugs you may have found in either the core library or any of the examples that are part of the repository. When submitting a bug please do the following:</p>\n<p><strong>1. Search for existing issues.</strong> Your bug may have already been fixed or addressed in a development branch version of Dragular, so be sure to search the issues first before putting in a duplicate issue.</p>\n<p><strong>2. Not sure if it&#39;s a bug?.</strong> Then please ask via issues and tag it [question].</p>\n<p><strong>3. Create an isolated and reproducible test case.</strong> If you are reporting a bug, make sure you also have a minimal, runnable, code example that reproduces the problem you have.</p>\n<p><strong>4. Include a live example.</strong> After narrowing your code down to only the problem areas, make use of <a href=\"http://codepen.io\">Codepen</a>, <a href=\"http://jsbin.com/\">jsBin</a>, or a link to your live site so that we can view a live example of the problem. (you can start by forking <a href=\"https://codepen.io/luckylooke/pen/pPmeWY\">this codepen</a>)</p>\n<p><strong>5. Share as much information as possible.</strong> Include browser version affected, your OS, version of the library, steps to reproduce, etc. &quot;X isn&#39;t working!!!1!&quot; will probably just be closed.</p>\n<h2 id=\"dev-vs-master\">Dev vs. Master</h2>\n<p>The dev branch of Dragular is our &#39;current working&#39; version. It is always ahead of the master branch in terms of features and fixes. However it&#39;s also bleeding-edge and experimental and we cannot and do not guarantee it will compile or work for you. Very often we have to break things for a few days while we rebuild and patch. So by all means please export the dev branch and contribute towards it, indeed that is where all Pull Requests should be sent, but do so understanding the API may change beneath you.</p>\n<h2 id=\"making-changes\">Making Changes</h2>\n<p>To take advantage of our npm build script and jshint config it will be easiest for you if you have node.js installed locally.</p>\n<p>You can download node.js from <a href=\"http://nodejs.org\">nodejs.org</a>.</p>\n<p>After that you can clone the repository and run <code>npm i</code> inside the cloned folder. This will install dependencies necessary for building the project. For development workflow automation dragular uses <code>gulp &gt;= 3.9.0</code>. Before starting development, make sure that <code>gulp</code> is installed on your machine globally: <code>npm i -g gulp</code>.</p>\n<h3 id=\"developing\">Developing</h3>\n<p>There are several gulp tasks that are used for generating different builds:</p>\n<ul>\n<li><code>gulp dev</code> - Serves files with BrowserSync server, watches &amp; automatically refreshes connected browsers on changes, generates non-minified but concatenated styles &amp; scripts from the dragular source.</li>\n<li><code>gulp dev:docs</code> - Does exactly the same as <code>gulp dev</code>, except it works with the documentation source.</li>\n<li><code>gulp build</code> - Concatenates and minifies dragular source files.</li>\n<li><code>gulp build:docs</code> - Concatenates and minifies documentation source files.</li>\n</ul>\n<h3 id=\"linting\">Linting</h3>\n<ul>\n<li><code>gulp lint</code> &amp; <code>gulp lint:docs</code> - Lint JavaScript files.</li>\n</ul>\n<h3 id=\"making-a-pull-request\">Making a pull request</h3>\n<p>Once that is ready, make your changes and submit a Pull Request:</p>\n<ul>\n<li><p><strong>Send Pull Requests to the <code>dev</code> branch.</strong> All Pull Requests must be sent to the <code>dev</code> branch, <code>master</code> is the latest release and PRs to that branch will be closed.</p>\n</li>\n<li><p><strong>Ensure changes are jshint validated.</strong> Our JSHint configuration file is provided in the repository and you should check against it before submitting.</p>\n</li>\n<li><p><strong>Only commit relevant changes.</strong> Don&#39;t include changes that are not directly relevant to the fix you are making. The more focused a PR is, the faster it will get attention and be merged. Extra files changing only whitespace or trash files will likely get your PR closed.</p>\n</li>\n</ul>\n<p>Dependencies for building from source and running tests:</p>\n<h2 id=\"coding-style-preferences-are-not-contributions\">Coding style preferences are not contributions</h2>\n<p>If your PR is doing little more than changing the Dragular source code into a format / coding style that you prefer then we will automatically close it. All PRs must adhere to the coding style already set-out across the lines of code in Dragular. Your personal preferences for how things should &quot;look&quot; or be structured do not apply here, sorry. PRs should fix bugs, fix documentation or add features. No changes for the sake of change.</p>\n<h2 id=\"i-don-t-really-like-git-node-js-but-i-can-fix-this-bug\">I don&#39;t really like git / node.js, but I can fix this bug</h2>\n<p>That is fine too. While Pull Requests are the best thing in the world for us, they are not the only way to help. You&#39;re welcome to post fixes to our forum or even just email them to us. All we ask is that you still adhere to the guidelines presented here re: JSHint, etc.</p>\n");}]);

/***/ })
/******/ ])
});
;