#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';

import App from './App';

const cli = meow(`
  Usage
    $ timezone

  Options
    --mode, -m  Select Mode

  Examples
    $ timezone --mode=current
    $ timezone --mode=convert
`, {
  flags: {
    mode: {
      type: 'string',
      alias: 'm',
      default: 'current',
    },
  },
});

render(<App mode={cli.flags.mode} />);
