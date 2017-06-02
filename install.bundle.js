/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 458);
/******/ })
/************************************************************************/
/******/ ({

/***/ 458:
/***/ (function(module, exports) {

eval("window.handleClientLoad = function () {\n\tgapi.load('client:auth2', start);\n};\n\nfunction start() {\n\tgapi.client.init({\n\t\tdiscoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],\n\t\tclientId: '1013490914659-uplupg4mookmukuqajih2k3uude3v54t.apps.googleusercontent.com',\n\t\tscope: ['profile', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive.install'].join(' ')\n\t}).then(function () {\n\t\tconsole.log('initialized');\n\t\tgapi.auth2.getAuthInstance().signIn();\n\t});\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luc3RhbGwuanM/ZWFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuaGFuZGxlQ2xpZW50TG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0Z2FwaS5sb2FkKCdjbGllbnQ6YXV0aDInLCBzdGFydCk7XG59O1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcblx0Z2FwaS5jbGllbnQuaW5pdCh7XG5cdFx0ZGlzY292ZXJ5RG9jczogWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9kcml2ZS92My9yZXN0J10sXG5cdFx0Y2xpZW50SWQ6ICcxMDEzNDkwOTE0NjU5LXVwbHVwZzRtb29rbXVrdXFhamloMmszdXVkZTN2NTR0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcblx0XHRzY29wZTogWydwcm9maWxlJywgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUuZmlsZScsICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2RyaXZlLmluc3RhbGwnXS5qb2luKCcgJylcblx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2luaXRpYWxpemVkJyk7XG5cdFx0Z2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduSW4oKTtcblx0fSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5zdGFsbC5qc1xuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });