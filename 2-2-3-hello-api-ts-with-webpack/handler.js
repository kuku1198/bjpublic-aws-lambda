"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event) => {
    console.log('event', event);
    if (!event.queryStringParameters || !event.queryStringParameters.name) {
        return { statusCode: 400, body: 'Not Found' };
    }
    return {
        statusCode: 200,
        body: `Hello, ${event.queryStringParameters.name}!`
    };
};
exports.hello = hello;
