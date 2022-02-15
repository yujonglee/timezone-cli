import React from 'react';
import { Box, useInput, Text } from 'ink';

import { TimeZone, timeZones } from '../constants';
import Selectable from '../Selectable';

type Prop = {
    onChange: (t: TimeZone) => void,
    exclude?: TimeZone
}

export default function To({ onChange, exclude }: Prop) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const labels = timeZones
    .map(({ label }) => label)
    .filter((label) => exclude?.label !== label);

  React.useEffect(() => {
    const selected = labels[selectedIndex];

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onChange(timeZones.find(({ label }) => label === selected)!);
  }, [selectedIndex]);

  useInput((_, key) => {
    if (key.upArrow) {
      setSelectedIndex(Math.max(0, selectedIndex - 1));
    }

    if (key.downArrow) {
      setSelectedIndex(Math.min(2, selectedIndex + 1));
    }
  });

  return (
    <Box flexDirection="column">
      <Text color="yellow">
        {'2. Which timezone would you like to convert the time string you entered to?\n'}
      </Text>
      <Selectable selectedIndex={selectedIndex}>
        {labels.map((label) => (
          <Text key={label}>
            {label}
          </Text>
        ))}
      </Selectable>
    </Box>
  );
}
