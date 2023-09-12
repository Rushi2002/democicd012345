import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const democicdpipeline = new CodePipeline(this, "demopipeline", {
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("Rushi2002/democicd012345", "main"),
        commands: ["npm cli", "npm run build", "npm cdk synth"],
      }),
    });
  }
}
