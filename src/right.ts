export class Right<L, R> {
	constructor(_: L | null, private _value: R) {}

	getRight = (): R => this._value;

	getLeft = (): L | null => null;

	isRight(): boolean {
		return true;
	}

	isLeft = (): boolean => {
		return false;
	};

	fold<T>(leftFn: (_: L) => T | void | void, rightFn: (_: R) => T): T | void {
		return rightFn(this._value);
	}
}
