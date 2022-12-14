# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`Workshop1Stack`)
which contains an Amazon Lambda, Dynamodb, API gateway with providing IAM roles and access permission.

The `cdk.json` file tells the CDK Toolkit how to execute your app.


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests

* `cdk bootstrap`   Calls for the first time during cdk deployment
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk deploy --hotswap` Use it when you want to push only code changes and not the stack
* `cdk watch`       watch the changes of the file and automatically it calls the cdk deploy internally, it pushes only code changes
