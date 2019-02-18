"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Model_1 = require("./Model");
var Const_1 = require("./helpers/Const");
var Const_2 = require("./helpers/Const");
var Puppy = /** @class */ (function (_super) {
    __extends(Puppy, _super);
    function Puppy(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    Puppy.prototype.build = function (name, animal, photo, toys) {
        this.name = name;
        this.animal = animal;
        this.photo = photo;
        this.toys = toys;
        return this;
    };
    Puppy.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            animal: this.animal,
            photo: this.photo,
            toys: this.toys
        };
    };
    Puppy.getAnimal = function (val) { return Const_2.getEnum(Const_1.Animal, val, Const_1.Animal.OTHER); };
    return Puppy;
}(Model_1["default"]));
exports["default"] = Puppy;
//# sourceMappingURL=Pet.js.map