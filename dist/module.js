(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    "use strict";
    return b * b;
};

debugger;

var variable = 20;

var MyClass = (function () {
    function MyClass(credentials) {
        _classCallCheck(this, MyClass);

        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    MyClass.prototype.getName = function getName() {
        return this.name;
    };

    return MyClass;
})();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

console.log(_import.square(5)); //25

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
};

var x = new _import.MyClass(cred);
console.log(x.getName());

},{"./import":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamNsb3N1cmUvcHJvamVjdHMvbm9kZS9icm93c2VyaWZ5LWJhYmVsLWRlbW8vbW9kdWxlcy9pbXBvcnQuanMiLCIvVXNlcnMvamNsb3N1cmUvcHJvamVjdHMvbm9kZS9icm93c2VyaWZ5LWJhYmVsLWRlbW8vbW9kdWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFJLENBQUM7UUFBRSxDQUFDLHlEQUFHLENBQUM7V0FBSSxDQUFDLEdBQUcsQ0FBQztDQUFDLENBQUM7O0FBRTlCLElBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFJLENBQUMsRUFBSTtBQUNmLGdCQUFZLENBQUM7QUFDYixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEIsQ0FBQzs7QUFFRixTQUFTOztBQUVULElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFFWixPQUFPO0FBQ0UsYUFEVCxPQUFPLENBQ0csV0FBVyxFQUFDOzhCQUR0QixPQUFPOztBQUVMLFlBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztBQUM3QixZQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUE7S0FDL0M7O0FBSkMsV0FBTyxXQUtULE9BQU8sR0FBQSxtQkFBRTtBQUNMLGVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNwQjs7V0FQQyxPQUFPOzs7UUFVTCxHQUFHLEdBQUgsR0FBRztRQUFDLE1BQU0sR0FBTixNQUFNO1FBQUMsUUFBUSxHQUFSLFFBQVE7UUFBRSxPQUFPLEdBQVAsT0FBTzs7Ozs7c0JDckJNLFVBQVU7O0FBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV2QixJQUFJLElBQUksR0FBQztBQUNMLFFBQUksRUFBQyxjQUFjO0FBQ25CLGdCQUFZLEVBQUMsUUFBUTtDQUN4QixDQUFBOztBQUdELElBQUksQ0FBQyxHQUFHLG9CQUFZLElBQUksQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHN1bSA9IChhLCBiID0gNik9PihhICsgYik7XG5cbnZhciBzcXVhcmUgPSAoYik9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgcmV0dXJuIGIgKiBiO1xufTtcblxuZGVidWdnZXI7XG5cbnZhciB2YXJpYWJsZSA9IDIwO1xuXG5jbGFzcyBNeUNsYXNze1xuICAgIGNvbnN0cnVjdG9yKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gY3JlZGVudGlhbHMubmFtZTtcbiAgICAgICAgdGhpcy5lbnJvbGxtZW50Tm8gPSBjcmVkZW50aWFscy5lbnJvbGxtZW50Tm9cbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IHtzdW0sc3F1YXJlLHZhcmlhYmxlLCBNeUNsYXNzfTtcbiIsImltcG9ydCB7c3VtLHNxdWFyZSx2YXJpYWJsZSxNeUNsYXNzfSBmcm9tICcuL2ltcG9ydCc7XG5cbmNvbnNvbGUubG9nKHNxdWFyZSg1KSk7IC8vMjVcblxudmFyIGNyZWQ9e1xuICAgIG5hbWU6J1JpdGVzaCBLdW1hcicsXG4gICAgZW5yb2xsbWVudE5vOjExMTE1MDc4XG59XG5cblxudmFyIHggPSBuZXcgTXlDbGFzcyhjcmVkKTtcbmNvbnNvbGUubG9nKHguZ2V0TmFtZSgpKTtcblxuIl19
