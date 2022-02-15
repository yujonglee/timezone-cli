import React from 'react';
import { ForegroundColor } from 'chalk'

type Props = {
    selectedIndex: number,
    children: React.ReactNode,
}

const Selectable = ({ selectedIndex, children }: Props) => {
    const color = (i: number): typeof ForegroundColor => 
        (i === selectedIndex) ? 'cyan' : 'blue'
  
    return (
        React.Children.map(children, (child, i) =>
          React.cloneElement(child as React.ReactElement, { color: color(i) })
        )
    ) as unknown as React.ReactElement;
};

module.exports = Selectable;
export default Selectable;
