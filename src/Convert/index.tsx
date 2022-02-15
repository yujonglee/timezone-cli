import React from 'react';
import { useInput } from 'ink';

import From from './From';
import To from './To';
import Result from './Result';

import { TimeZone } from '../constants';

type Step = 'from' | 'to' | 'result'

export default function Convert() {
  const [step, setStep] = React.useState<Step>('from');

  const [fromTimezone, setFromTimezone] = React.useState<TimeZone>();
  const [toTimezone, setToTimezone] = React.useState<TimeZone>();

  useInput((_, key) => {
    if (key.return) {
      setStep((prev) => {
        if (prev === 'from') {
          return 'to';
        }

        if (prev === 'to') {
          return 'result';
        }

        return 'result';
      });
    }
  });

  switch (step) {
    case 'from':
      return <From onChange={setFromTimezone} />;
    case 'to':
      return <To onChange={setToTimezone} exclude={fromTimezone} />;
    case 'result':
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return <Result fromTimezone={fromTimezone!} toTimezone={toTimezone!} />;
    default:
      return null;
  }
}
