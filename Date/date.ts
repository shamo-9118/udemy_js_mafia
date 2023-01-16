"use strict";
const day: Date = new Date();
const today: number = day.getDate();
const month: number = day.getMonth() + 1;
const todayText: string = `${month}月${today}日`;
console.log(todayText);
