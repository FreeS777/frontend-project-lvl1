#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainPrimeGame from '../games/prime.js';
import { isRulesPrimeGame } from '../src/index.js';

sayWelcome();
sayHi();
isRulesPrimeGame();
brainPrimeGame();
