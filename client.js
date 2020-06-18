#!/usr/bin/env node
'use strict';

const tilmd = require('./index');
const meow = require('meow');

const cli = meow(`
Usage
  $ tilmd [filename] [options]

Example
	$ ctilmd studyfile -a

Options
	--regster -r   Generate a file based on the registered file (default, light, detail)
`, {
	flags: {
		register: {
			type: 'string',
			alias: 'r'
		}
	}
});

if (cli.flags.register !== undefined && cli.flags.register !== '' && cli.input[0] !== undefined) {
	tilmd(cli.flags.register + '.md', cli.input[0] + '.md');
} else if (cli.flags.register !== undefined && cli.flags.register !== '') {
	tilmd(cli.flags.register + '.md', 'output.md');
} else if (cli.input[0]) {
	tilmd('default.md', cli.input[0] + '.md');
} else {
	tilmd();
}
