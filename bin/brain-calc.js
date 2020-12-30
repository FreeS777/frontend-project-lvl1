#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainCalcGame, { isRulesCalcGame } from '../games/calc.js';

sayWelcome();
sayHi();
isRulesCalcGame();
brainCalcGame();
