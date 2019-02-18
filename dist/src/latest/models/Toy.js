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
var Toy = /** @class */ (function (_super) {
    __extends(Toy, _super);
    function Toy(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    Toy.prototype.build = function (name) {
        this.name = name;
        return this;
    };
    Toy.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    return Toy;
}(Model_1["default"]));
exports["default"] = Toy;
//# sourceMappingURL=Toy.js.map