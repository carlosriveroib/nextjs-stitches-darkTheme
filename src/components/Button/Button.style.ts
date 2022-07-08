import { styled } from '@styles';

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$foreground',
  border: 'none',
  borderRadius: '24px',
  color: '$background',
  fontSize: '$1',
  marginLeft: '3px',
  marginTop: '3px',
  width: '100px',
  height: '40px',
  position: 'relative',

  '&::before': {
    content: `''`,
    backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    borderRadius: 'inherit',
    display: 'block',
    position: 'absolute',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    top: '-3px',
    left: '-3px',
    zIndex: -1,
  },

  variants: {
    size: {
      large: {
        borderRadius: '48px',
        fontSize: '$3',
        height: '56px',
        width: '140px',
      },
    },
  },
});
