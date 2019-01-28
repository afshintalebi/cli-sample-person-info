#!/usr/bin/env node

var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var chalk = require('chalk');


program
    .option('-f, --firstname', chalk.blue('User first name'))
    .option('-l, --lastname', chalk.blue('User last name'))
    .option('-l, --cellphone', chalk.blue('User cellphone number'))
    .option('-l, --age', chalk.blue('User age'))
    .action(function () {
        co(function* () {
            var firstname = yield prompt(chalk.blue('firstname: '));
            var lastname = yield prompt(chalk.red('lastname: '));
            var cellphone = yield prompt(chalk.green('cellphone number: '));
            var age = yield prompt(chalk.yellow('your age: '));
            console.log('------------');
            console.log('Hello %s %s', chalk.cyan(firstname.toUpperCase()), chalk.cyan(lastname.toUpperCase()));
            console.log('CellPhone Number: %s', chalk.cyan(cellphone));
            console.log('Your Age: %s', chalk.cyan(age));
            console.log('');
            console.log(chalk.bgWhite.black('Thanks for send your information.'));
        });
    })
    .parse(process.argv);
