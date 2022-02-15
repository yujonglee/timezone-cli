import React, { useEffect } from 'react';
import { Box, Text, useApp } from 'ink';
import clipboard from 'clipboardy';

import { TimeZone } from './constants';

type Props = {
    timeZones: Array<TimeZone>,
    dates?: Array<Date>,
}

export default function Show({ timeZones, dates = [new Date()] }: Props) {
  const { exit } = useApp();
  useEffect(() => {
    exit();
  }, []);

  const resultString = timeZones.reduce((acc, { label, timeZone }) => {
    const [a, b] = dates.map((date) => date.toLocaleString('en-US', { timeZone }));

    if (!b) {
      return `${acc}${label}: ${a}\n`;
    }

    return `${acc}${label}: ${a} ~ ${b}\n`;
  }, '');

  clipboard.writeSync(resultString);

  return (
    <Box flexDirection="column">
      {timeZones.map(({ label, timeZone }) => (
        <Box key={label}>
          <Text color="cyan">
            {`${label} `}
          </Text>
          <Text color="blue">
            {dates
              .map((date) => date.toLocaleString('en-US', { timeZone }))
              .join(' ~ ')}
          </Text>
        </Box>
      ))}
      <Text>{'\n🎉 Copied to clipboard! 🎉\n'}</Text>
    </Box>
  );
}
