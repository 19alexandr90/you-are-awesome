// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (n) => {
    Object.defineProperty(Object.prototype, n, {
        enumerable: false,
        get: () => Function.prototype.n,
        set: (n) => Function.prototype.n = n}
    );
    return n;
};
const createProtoMagicObject = () => {};
  
let counter = 0;
const incrementor = () => {
    incrementor.valueOf = () => counter;
    counter++;
    return incrementor;
}
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (n) => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => arr.sort((a, b) => Object.getPrototypeOf(a) - Object.getPrototypeOf(b));

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
