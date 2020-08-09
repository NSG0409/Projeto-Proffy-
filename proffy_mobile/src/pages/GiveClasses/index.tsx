import React from 'react';

//importando tela sxree <View>, <ImgaeBackground>, e Texto
//sao as coisas que vamos mostrar na tela.
import { View, ImageBackground, Text } from 'react-native';
//importando navegação de rota
import { useNavigation } from '@react-navigation/native';
//importnado botao 
import { RectButton } from 'react-native-gesture-handler';

//importando jsx estilos
import styles from './styles';

//importando img
import giveClassesImg from '../../assets/images/give-classes-background.png';




function GiveClasses(){
const {goBack} = useNavigation();
    function hundleNavigateBack(){
        goBack();
    }
    return(
        <View style={styles.container}>
            {/* o resize faz com o a imagem fica continda dentro
              do elemento, ele diminui um pouco */}
            <ImageBackground 
            resizeMode='contain' 
            source={giveClassesImg} 
            style={styles.content}
            >
                {/* Texto da tela */}
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.descripition}>
                    Para começar, você precisa
                    e cadastrar como professor
                    na nossa plataforma web.
                </Text>
            </ImageBackground>

            {/* Botão */}
            <RectButton onPress={hundleNavigateBack} style={styles.okButton}> 
              <Text style={styles.okButtonText}> 
                    Tudo bem
              </Text>
            </RectButton>
        </View>
    ) 
}

export default GiveClasses;