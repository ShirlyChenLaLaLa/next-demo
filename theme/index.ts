const fontWeight = {
  normal: 400,
  demiBold: 500,
  semiBold: 600,
};

const colors = {
  grey4c: '#4c4c4c',
  grey66: '#666666',
  grey99: '#999999',
  greyCc: '#cccccc',
  greyEb: '#ebebeb',
  greyF7: '#f7f7f7',
  greyFa: '#fafafa',
  greyText: '#99aab5',
  white: '#fff',
  outline: '#e2e6e8',
  red: '#d85145',
};

const theme = {
  fontTypes: {
    fontLato: 'lato',
  },
  zIndex: {
    negative: -1,
    zero: 0,
    base: 1,
    low: 10,
    mid: 50,
    big: 100,
    high: 1000,
    onTop: 5000,
    topSwap: 10000,
    dropdown: 50000,
    header: 100000,
    overlay: 1000000,
    modal: 10000000,
    aboveModal: 50000000,
    king: 100000000,
  },
  fontWeight,
  colors,
};

export default theme;
