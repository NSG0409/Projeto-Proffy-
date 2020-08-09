import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent:'center',
        padding: 40
    },

    banner: {
        width: '100%',

        resizeMode: 'contain',
        //renderiza para um tamanho menor
        //para mostrar claramente
        //a imagem inserida
    },

    title:{
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        fontFamily: 'Poppins_400Regular',
    },

    titleBold:{
        fontWeight: 'bold',
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button:{
        backgroundColor: '#333',
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary:{
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color:'#FFF',
        fontSize: 20
    },

    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 11,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }
});

export default styles;