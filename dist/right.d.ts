export declare class Right<L, R> {
    private _value;
    constructor(_: L | null, _value: R);
    getRight: () => R;
    getLeft: () => L | null;
    isRight(): boolean;
    isLeft: () => boolean;
    fold<T>(leftFn: (_: L) => T | void | void, rightFn: (_: R) => T): T | void;
}
