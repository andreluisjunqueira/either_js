export declare class Left<L, R> {
    private _value;
    constructor(_value: L, _: R | null);
    getLeft: () => L;
    getRight: () => R | null;
    isRight: () => boolean;
    isLeft: () => boolean;
    fold<T>(leftFn: (_: L) => T | void, _rightFn: (_: R) => T): T | void;
}
