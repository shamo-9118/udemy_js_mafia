"use strict";
const Member = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.createName = function () {
        return this.firstName + " " + this.lastName;
    };
};
const member = new Member("shoma");
const name = member.createName();
console.log(name);
