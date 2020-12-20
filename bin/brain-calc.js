#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainCalcGame from '../games/calc.js';
import { isRulesCalcGame } from '../src/index.js';

sayWelcome();
sayHi();
isRulesCalcGame();
brainCalcGame();
