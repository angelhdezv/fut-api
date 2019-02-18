"use strict";
exports.__esModule = true;
var Animal;
(function (Animal) {
    Animal["DOG"] = "DOG";
    Animal["CAT"] = "CAT";
    Animal["TURTLE"] = "TURTLE";
    Animal["OTHER"] = "OTHER";
})(Animal || (Animal = {}));
exports.Animal = Animal;
var Lang;
(function (Lang) {
    Lang["EN"] = "EN";
    Lang["ES"] = "ES";
})(Lang || (Lang = {}));
exports.Lang = Lang;
;
/**
 * Get enum value base on their respective value
 * @param  {any} data Enum collection
 * @param  {string} val Enum value
 * @param  {any} def Default response (item)
 */
var getEnum = function (data, val, def) {
    if (val)
        val = val.toUpperCase();
    for (var d in data)
        if (data[d].toUpperCase() == val)
            return d;
    return def;
};
exports.getEnum = getEnum;
//# sourceMappingURL=Const.js.map