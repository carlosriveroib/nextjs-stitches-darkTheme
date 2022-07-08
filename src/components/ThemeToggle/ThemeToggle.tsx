import { useTheme } from 'next-themes';

import { css } from '@styles';

const styles = css({
  backgroundColor: '#b2c8ff',
  border: 'none',
  borderRadius: '24px',
  cursor: 'pointer',
  margin: '12px 0',
  padding: '12px',
});

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const theme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(theme);
  };

  return (
    <button className={styles()} onClick={toggleTheme}>
      Switch theme
    </button>
  );
}

export { ThemeToggle };
