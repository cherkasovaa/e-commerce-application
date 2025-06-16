import { Link } from '@mui/material';
import type { JSX } from 'react';

export const convertToLink = (text: string): (string | JSX.Element)[] => {
  const regExp = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regExp.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }

    elements.push(
      <Link key={key++} href={match[2]} target="_blank" underline="none">
        {match[1]}
      </Link>
    );

    lastIndex = regExp.lastIndex;

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }
  }

  return elements.length > 0 ? elements : [text];
};
