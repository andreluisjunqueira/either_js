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
    fold(leftFn, rightFn) {
        return rightFn(this._value);
    }
}
exports.Right = Right;
