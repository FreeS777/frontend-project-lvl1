#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainProgressGame from '../games/progression.js';
import { isRulesProgressGame } from '../src/index.js';

sayWelcome();
sayHi();
isRulesProgressGame();
brainProgressGame();
