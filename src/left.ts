export class Left<L, R> {
	constructor(private _value: L, _: R | null) {}

	getLeft = (): L => this._value;

	getRight = (): R | null => null;

	isRight = (): boolean => {
		return false;
	};

	isLeft = (): boolean => {
		return true;
	};

	fold<T>(leftFn: (_: L) => T | void, _rightFn: (_: R) => T): T | void {
		return leftFn(this._value);
	}
}
