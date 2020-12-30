#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainPrimeGame, { isRulesPrimeGame } from '../games/prime.js';

sayWelcome();
sayHi();
isRulesPrimeGame();
brainPrimeGame();
