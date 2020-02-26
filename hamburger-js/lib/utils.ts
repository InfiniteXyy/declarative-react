import React from 'react';
import { ChildElement, isReact } from './common';

export function generateChildKey(child: JSX.Element, index: number | string) {
  return React.cloneElement(child, { key: index });
}

export function buildElement(child: ChildElement) {
  // Element 或 string 不需要进行 build，否则对调用它的 build
  if (typeof child === 'string') return child;
  if ('build' in child) return child.build();
  return child;
}

export function createPlaceHolder(width: string, height: string, innerWords: string, backgroundColor = '#eaeaea'): any {
  if (isReact) {
    return React.createElement(
      'div',
      {
        style: { backgroundColor, width, height, border: '2px solid white', padding: 10 },
      },
      innerWords,
    );
  } else {
    const element = document.createElement('div');
    element.style.backgroundColor = backgroundColor;
    element.style.width = width;
    element.style.height = height;
    element.style.border = '2px solid white';
    element.style.padding = '10px';
    element.innerText = innerWords;
    return element;
  }
}
