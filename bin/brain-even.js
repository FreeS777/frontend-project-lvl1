#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainEvenGame from '../games/even.js';
import { isRulesEvenGame } from '../src/index.js';

sayWelcome();
sayHi();
isRulesEvenGame();
brainEvenGame();
