import React from 'react';
import { Box, Text } from 'ink';

import Show from '../Show';
import Input from './Input';

import { TimeZone } from '../constants';
import { getDate } from '../utils';

type Prop = {
    fromTimezone: TimeZone,
    toTimezone: TimeZone,
}

export default function Result({ fromTimezone, toTimezone }: Prop) {
  const [timeString, setTimeString] = React.useState('');
  const [isDone, setIsDone] = React.useState(false);

  return (
    <Box flexDirection="column">
      <Text color="yellow">
        {`3. ${fromTimezone.label} --> ${toTimezone.label}\n`}
      </Text>
      {isDone
        ? (
          <Show
            timeZones={[fromTimezone, toTimezone]}
            dates={timeString.split('~').map(getDate)}
          />
        ) : (
          <Input
            timeString={timeString}
            setTimeString={setTimeString}
            setIsDone={setIsDone}
          />
        )}
    </Box>
  );
}
