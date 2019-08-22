const colors = {
  transparent: 'transparent',
  black: '#3b3b3b',
  white: '#ffffff',
  primary: '#40C3FF',
  'primary-dark': '#1E90FF',
  grey: {
    '100': '#F0F4F8',
    '200': '#D9E2EC',
    '300': '#BCCCDC',
    '400': '#9FB3C8',
    '500': '#829AB1',
    '600': '#627D98',
    '700': '#486581',
    '800': '#334E68',
    '900': '#243B53',
  },
};

module.exports = {
  theme: {
    colors,
    fontFamily: {
      sans: [
        'Fira Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  variants: {
    appearance: ['default'],
    borderCollapse: false,
    float: false,
    order: false,
  },
};
