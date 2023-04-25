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

	getOrElse<T>(elseFn: (_: L) => T): T | void{
		return elseFn(this._value);
	}

	getOrNull(): R | null{
		return null;
	}

	getOrDefault<T>(defaultValue: T): T | void {
		return defaultValue;
	}

	map<T>(_: (_: L) => L): Left<L, null> | void{
		return new Left(this._value, null);
	}

	mapError<T>(predicate: (_: L) => L): Left<L, null> | void{
		return new Left(predicate(this._value), null);
	}
}
