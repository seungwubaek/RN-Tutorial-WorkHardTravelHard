const defaultTheme = {
  mode: 'light',
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    gray: '#6c757d',
    deepGray: '#212529',
    background: '#000',
    text: '#fff',
    textInputBackground: '#fff',
  },
}

export default defaultTheme;

export const darkTheme = {
  mode: 'dark',
  colors: {
    ...defaultTheme.colors,
    text: '#fff',
    background: '#6c757d',
  },
}
