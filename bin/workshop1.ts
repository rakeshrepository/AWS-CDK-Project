#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Workshop1Stack } from '../lib/workshop1-stack';

const app = new cdk.App();
new Workshop1Stack(app, 'Workshop1Stack');
