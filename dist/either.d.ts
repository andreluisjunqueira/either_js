import { Left } from './left';
import { Right } from './right';
export type Either<L, R> = Left<L, R> | Right<L, R>;
export type EitherP<L, R> = Promise<Either<L, R>>;
export declare const right: <L, R>(value: R) => Either<L, R>;
export declare const left: <L, R>(value: L) => Either<L, R>;
