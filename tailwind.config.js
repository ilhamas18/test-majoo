module.exports = {
	purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
      colors: {
        'ocean-blue': '#4b94e3',
        'pink': '#c96bb3'
      },
      fontFamily: {
        fontFamily: {
          'Museo-Light': ['Museo-Light'],
          'Museo': ['Museo'],
          'Museo-Medium': ['Museo-Medium'],
          'Museo-Bold': ['Museo-Bold']
        }
      }
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px",
         screens: {
          'tablet': '360px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      }
    },
	},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}