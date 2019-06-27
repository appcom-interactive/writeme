#!/usr/bin/env node

/**
 * Created by appcom interactive GmbH on 27.06.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const { description, version } = require('../package.json');

program
  .version(version)
  .option('-t, --type [type]', 'Set the type of software the readme is refering to (currently supported: module, solution, styleguide)', '')
  .option('-n, --name [name]', 'Set the name of the software', '')
  .option('-d, --dir [dir]', 'Set the directory where the readme is placed', '.')
  .description(description);

program.parse(process.argv);

const createREADMEFile = (args = {}) => {
  const filename = path.join(__dirname, 'templates', `README_${args.type}.md`);
  if (!fs.existsSync(filename)) {
    console.error(`You provided an unsupported type: "${args.type}"`);
    process.exit(1);
  }

  const content = String(fs.readFileSync(filename)).replace('{NAME}', args.name || '{NAME}');

  if (args.dir) {
    mkdirp.sync(args.dir);
  }

  const outputFilename = path.join(args.dir || process.cwd(), 'README.md');
  fs.writeFileSync(outputFilename, content);

  console.info(`Created README.md under ${outputFilename}`);
};

if (!program.type) {
  inquirer.prompt([{
    message: 'What type of software is the README refering to?: ',
    type: 'list',
    name: 'type',
    choices: ['module', 'project', 'styleguide']
  }, {
    message: 'Enter the name of your software: ',
    type: 'input',
    name: 'name'
  }, {
    message: 'Where do you want to place your README file?: ',
    type: 'input',
    name: 'dir',
    default: '.'
  }])
    .then(answers => createREADMEFile(answers));
} else {
  createREADMEFile(program);
}

