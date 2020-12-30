#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainEvenGame, { isRulesEvenGame } from '../games/even.js';

sayWelcome();
sayHi();
isRulesEvenGame();
brainEvenGame();
