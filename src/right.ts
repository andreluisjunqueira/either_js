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

	fold<T>(_leftFn: (_: L) => T | void | void, rightFn: (_: R) => T): T | void {
		return rightFn(this._value);
	}

	getOrElse<T>(_elseFn: (_: L) => R): R | void{
		return this._value;
	}

	getOrNull(): R | null{
		return this._value;
	}

	getOrDefault<T>(_elseFn: (_: L) => R): R | void{
		return this._value;
	}

	map<T>(predicate: (_: R) => R): Right<null, R> | void{
		return new Right(null, predicate(this._value));
	}
	
	mapError<T>(_: (_: R) => R): R | void {
		return this._value;
	}
}
