import React from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';

import Selectable from '../Selectable';

type Prop = {
    timeString: string,
    setTimeString: (s: string) => void,
    setIsDone: (b: boolean) => void,
}

export default function Input({ timeString, setTimeString, setIsDone }: Prop) {
  const [isSelectingType, setIsSelectingType] = React.useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const isPeriod = selectedIndex === 1;

  useInput((_, key) => {
    if (key.leftArrow) {
      setSelectedIndex(Math.max(0, selectedIndex - 1));
    }

    if (key.rightArrow) {
      setSelectedIndex(Math.min(1, selectedIndex + 1));
    }

    if (key.return) {
      if (isSelectingType) {
        setIsDone(true);
      } else {
        setIsSelectingType(true);
      }
    }
  });

  const current = new Date();

  const year = current.getFullYear();
  const month = current.getMonth() + 1; // Jan = 0
  const date = current.getDate();
  const hours = current.getHours();
  const minutes = current.getMinutes();

  const example = `${year}/${month}/${date}/${hours}/${minutes}`;

  return (isSelectingType
    ? (
      <TextInput
        value={timeString}
        onChange={setTimeString}
        placeholder={isPeriod ? `${example} ~ ${example}` : example}
      />
    )
    : (
      <Box flexDirection="column">
        <Box>
          <Selectable selectedIndex={selectedIndex}>
            <Text>Time </Text>
            <Text> Period</Text>
          </Selectable>
        </Box>
      </Box>
    )
  );
}
