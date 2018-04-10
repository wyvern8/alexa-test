# Alexa test AWS Summit 2018
This is a quick implementation of the Innovation day workshop using serverless framework and DynamoDB to count the number of times a fact is returned, and speak this as part of the response.

> "Here's your fact: The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years. I've told people this fact 2 times!"

## install
1. install serverless framework https://serverless.com/framework/docs/getting-started/
1. clone this repo
2. `npm install`
3. create your alexa skill app per http://alexa.design/factskill (skip lambda steps)
4. copy `.envSample` to `.env` and update to contain your Alexa appId
5. run `npm run sls-deploy`
6. test / view cloudwatch logs
