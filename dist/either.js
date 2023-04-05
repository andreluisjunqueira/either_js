"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.left = exports.right = void 0;
const left_1 = require("./left");
const right_1 = require("./right");
const right = (value) => new right_1.Right(null, value);
exports.right = right;
const left = (value) => new left_1.Left(value, null);
exports.left = left;
