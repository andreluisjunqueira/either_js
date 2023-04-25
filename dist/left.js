"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Left = void 0;
class Left {
    constructor(_value, _) {
        this._value = _value;
        this.getLeft = () => this._value;
        this.getRight = () => null;
        this.isRight = () => {
            return false;
        };
        this.isLeft = () => {
            return true;
        };
    }
    fold(leftFn, _rightFn) {
        return leftFn(this._value);
    }
    getOrElse(elseFn) {
        return elseFn(this._value);
    }
    getOrNull() {
        return null;
    }
    getOrDefault(defaultValue) {
        return defaultValue;
    }
    map(_) {
        return new Left(this._value, null);
    }
    mapError(predicate) {
        return new Left(predicate(this._value), null);
    }
}
exports.Left = Left;
