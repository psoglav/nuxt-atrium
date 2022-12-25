module.exports = {
  // prefix: 'tw-',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem'
      }
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1640px',
    },
    colors: {
      accent: '#7087ff',
      'dark-accent': '#3B498D',
      danger: {
        400: '#e82f27'
      },
      black: '#0e0e10',
      white: '#fff',
      gray: {
        100: '#F8F8F8',
        200: '#E0E0E0',
        300: '#C8C8C8',
        400: '#888888',
        500: '#707070',
        600: '#505050',
        700: '#383838',
        800: '#282828',
        900: '#101010'
      }
    },
    extend: {
      boxShadow: {
        smooth:
          '0px 100px 80px rgba(0, 0, 0, 0.21), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.150959), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.125183), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.105), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0848175), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0590406)'
      },
      transitionDuration: {
        2000: '2s',
        3000: '3s',
        4000: '4s',
        5000: '5s'
      },
      animation: {
        'spin-fast': 'spin .5s linear infinite'
      }
    }
  }
}
