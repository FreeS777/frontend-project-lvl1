#!/usr/bin/env node
import { sayWelcome, sayHi } from '../src/cli.js';
import brainProgressGame, { isRulesProgressGame } from '../games/progression.js';

sayWelcome();
sayHi();
isRulesProgressGame();
brainProgressGame();
