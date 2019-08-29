"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_issue_module_a_1 = require("ts-issue-module-a");
exports.moduleB = (age) => {
    const data = ts_issue_module_a_1.moduleA(age.toString());
    const ageString = data.age;
    const value = {
        age: parseInt(ageString, 10)
    };
    return value;
};
