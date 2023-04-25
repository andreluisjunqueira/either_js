export declare class Right<L, R> {
    private _value;
    constructor(_: L | null, _value: R);
    getRight: () => R;
    getLeft: () => L | null;
    isRight(): boolean;
    isLeft: () => boolean;
    fold<T>(_leftFn: (_: L) => T | void | void, rightFn: (_: R) => T): T | void;
    getOrElse<T>(_elseFn: (_: L) => R): R | void;
    getOrNull(): R | null;
    getOrDefault<T>(_elseFn: (_: L) => R): R | void;
    map<T>(predicate: (_: R) => R): Right<null, R> | void;
    mapError<T>(_: (_: R) => R): R | void;
}
