"use strict";
const verifyuser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = verifyuser(bdUser, sentUser);
console.log(loggedIn);
