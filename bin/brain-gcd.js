#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainGcdGame, { getRulesGcdGame } from '../games/gcd.js';

sayWelcome();
sayHi();
getRulesGcdGame();
brainGcdGame();
