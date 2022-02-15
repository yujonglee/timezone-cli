import React from 'react';

import Convert from './Convert';
import Show from './Show';

import { timeZones } from './constants';

type Props = {
    mode?: string
}

function App({ mode }: Props) {
  switch (mode) {
    case 'current':
      return <Show timeZones={timeZones} />;
    case 'convert':
      return <Convert />;
    default:
      return null;
  }
}

export default App;
