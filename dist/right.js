"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Right = void 0;
class Right {
    constructor(_, _value) {
        this._value = _value;
        this.getRight = () => this._value;
        this.getLeft = () => null;
        this.isLeft = () => {
            return false;
        };
    }
    isRight() {
        return true;
    }
    fold(_leftFn, rightFn) {
        return rightFn(this._value);
    }
    getOrElse(_elseFn) {
        return this._value;
    }
    getOrNull() {
        return this._value;
    }
    getOrDefault(_elseFn) {
        return this._value;
    }
    map(predicate) {
        return new Right(null, predicate(this._value));
    }
    mapError(_) {
        return this._value;
    }
}
exports.Right = Right;
