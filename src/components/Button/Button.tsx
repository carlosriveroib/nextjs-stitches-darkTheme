import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { CSS } from '@stitches/react';

import { StyledButton } from './Button.style';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<unknown>> & {
  css?: CSS;
  size?: 'large';
};

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export { Button };
