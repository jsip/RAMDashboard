"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Sample Controller';
var sampleHealthCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample health check route called.");
    // add logging
    return res.status(200).json({
        message: 'sample health query'
    });
};
var tickerQuery = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Ticker query route called.");
    // add morningstar api
    return res.status(200).json({
        message: 'received query'
    });
};
exports.default = {
    sampleHealthCheck: sampleHealthCheck,
    tickerQuery: tickerQuery
};
