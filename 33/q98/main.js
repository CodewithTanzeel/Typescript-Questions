"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs = require('dayjs');
const today = dayjs();
const nextNewYear = dayjs(`${today.year() + 1}-01-01`);
const daysLeft = nextNewYear.diff(today, 'day');
console.log(`There are ${daysLeft} days left until New Year.`);
