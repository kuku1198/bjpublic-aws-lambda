import {APIGatewayProxyHandlerV2} from "aws-lambda"

export const hello: APIGatewayProxyHandlerV2 = async (event) => {
    console.log('event', event)

    if (!event.queryStringParameters || !event.queryStringParameters.name) {
        return {statusCode: 400, body: 'Not Found'}
    }

    return {
        statusCode: 200,
        body: `Hello, ${event.queryStringParameters.name}!`
    }
};
