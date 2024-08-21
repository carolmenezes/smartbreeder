import { createTheme } from '@mui/material/styles';

const customColors = Array.of("#17EAF2", "#85F217", "#DFFF00", "#FF00EE");

export const generateTheme = (position) => { 
  const primaryColor = (customColors[position] || customColors[0]);

  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#121212',
        paper: '#2E2E2E'
      },
    },
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      h6:{
        fontSize: 24,
        fontWeight: 600
      }
    },
    components:{
      MuiTable: {
        styleOverrides:{
          root:{
            borderSpacing: '0 5px',
            borderCollapse: 'separate',
          }
        }
      },
      MuiTableHead:{
        styleOverrides: {
          root:{
            backgroundColor: '#4C4C4C',
          }
        }
      },
      MuiTableBody:{
        styleOverrides:{
          root:{
            backgroundColor: '#2E2E2E',
          }
        }
      },
    }
  });
}


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#17EAF2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif', // Tipografia padrão
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Adicione outras configurações de tipografia conforme necessário
  },
});

export default theme;