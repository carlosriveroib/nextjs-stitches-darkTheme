import { PropsWithChildren } from 'react';
import type { CSS } from '@stitches/react';

import { StyledText } from './Text.style';

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  css?: CSS;
};

type TextProps = PropsWithChildren<Props>;

function Text({ children, ...props }: TextProps) {
  return <StyledText {...props}>{children}</StyledText>;
}

export { Text };
