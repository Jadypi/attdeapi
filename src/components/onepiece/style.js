import { StyleSheet } from 'react-native'

export const estilo = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    botao: {
       padding: 10,
       backgroundColor: '#1E90FF',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 50,
       margin: 10,
       borderWidth: 2,
       borderColor: '#4682B4',

    },
    textoinput: {
        borderWidth: 3,
        height: 40,
        width: 300,
        margin: 8,
        borderRadius: 10,
        borderColor: '#6495ED' ,
        padding: 15 ,
    },

    img: {
        width: 300,
        height: 100,
    },

    estilos:{
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#B0C4DE',
        padding: 15,
    },

    dupla:{
        fontSize: 12,
        justifyContent: 'center',
        margin: 10,

    }
})