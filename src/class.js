"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hi, my name is ".concat(this.name));
    }
  }, {
    key: "greetDelay",
    value: function greetDelay(time) {
      var _this = this;

      setTimeout(function () {
        console.log("Hi, my name is ".concat(_this.name));
      }, time);
    }
  }], [{
    key: "sya",
    value: function sya() {
      console.log(this.name);
    }
  }]);

  return Person;
}();

var ColorPoint = /*#__PURE__*/function (_Person) {
  _inherits(ColorPoint, _Person);

  var _super = _createSuper(ColorPoint);

  function ColorPoint(name, color) {
    var _this2;

    _classCallCheck(this, ColorPoint);

    _this2 = _super.call(this, name); // 调用父类的constructor(x, y)

    _this2.color = color;
    return _this2;
  }

  _createClass(ColorPoint, [{
    key: "toString",
    value: function toString() {
      return this.color + ' ' + _get(_getPrototypeOf(ColorPoint.prototype), "toString", this).call(this); // 调用父类的toString()
    }
  }]);

  return ColorPoint;
}(Person);

var Foo = /*#__PURE__*/function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, null, [{
    key: "classMethod",
    value: function classMethod() {
      return 'hello';
    }
  }]);

  return Foo;
}();

Foo.classMethod(); // 'hello'

var foo = new Foo();
foo.classMethod();

var IncreasingCounter = /*#__PURE__*/function () {
  function IncreasingCounter() {
    _classCallCheck(this, IncreasingCounter);

    this._count = 0;
  }

  _createClass(IncreasingCounter, [{
    key: "value",
    get: function get() {
      console.log('Getting the current value!');
      return this._count;
    }
  }, {
    key: "increment",
    value: function increment() {
      this._count++;
    }
  }]);

  return IncreasingCounter;
}();