export declare class Left<L, R> {
    private _value;
    constructor(_value: L, _: R | null);
    getLeft: () => L;
    getRight: () => R | null;
    isRight: () => boolean;
    isLeft: () => boolean;
    fold<T>(leftFn: (_: L) => T | void, _rightFn: (_: R) => T): T | void;
    getOrElse<T>(elseFn: (_: L) => T): T | void;
    getOrNull(): R | null;
    getOrDefault<T>(defaultValue: T): T | void;
    map<T>(_: (_: L) => L): Left<L, null> | void;
    mapError<T>(predicate: (_: L) => L): Left<L, null> | void;
}
