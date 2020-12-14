#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import { rules, brainEvenGame } from '../src/even.js';

sayWelcome();
sayHi();
rules();
brainEvenGame();
