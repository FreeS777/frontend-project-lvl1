#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainGcdGame from '../games/gcd.js';
import { isRulesGcdGame } from '../src/index.js';

sayWelcome();
sayHi();
isRulesGcdGame();
brainGcdGame();
