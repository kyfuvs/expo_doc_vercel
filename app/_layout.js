// Project/app/_layout.js
import { ThemeProvider } from '../dark_mode/context/themeContext';
import Layout_stack from './layout_stack';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Layout_stack />
    </ThemeProvider>
  );
}
