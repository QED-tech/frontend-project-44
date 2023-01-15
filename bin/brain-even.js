#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import gameRunner from '../src/index.js';

const name = greetingUser();

gameRunner(name, 'even');
