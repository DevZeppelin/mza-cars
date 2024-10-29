module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#131842',
                secundary: '#E68369',
                lowContrast: '#ECCEAE' ,
                background: '#FBF6E2',
                backgroundSecundary: '#FBF6E2'
            },
            fontFamily : {
                body : ['Dosis']
            }
        },
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}