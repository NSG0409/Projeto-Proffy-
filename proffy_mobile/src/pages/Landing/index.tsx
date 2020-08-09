import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

//pacote de navegação, trás as funções para te levar 
//de uma pagina a outra
import {useNavigation} from '@react-navigation/native';

//dependencia, botão retangular, ele adapta o efeito 
//do click ao sistema operacional que o usuario usa,
//ele tras um efeito no botao que chama ripow
import {RectButton} from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing(){

    //desestruturtação de metodo com chaves {}
    const {navigate} = useNavigation();

    //função que faz o acesso a rota
    function handleNavigateToGiveClassesPage(){
        return(
            navigate('GiveClasses')
        );
    }

    function handleNavigationToStudy(){
        return( 
            navigate('Study')
        );
    }

    return (
    <View style={styles.container}>
       <Image source={landingImg} style={styles.banner}/>
        
        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>
                O que deseja fazer?
            </Text>
        </Text>

        <View style={styles.buttonsContainer}>
            {/* Botão estudar */}
            <RectButton onPress={handleNavigationToStudy} style={[styles.button, styles.buttonPrimary]}>
                <Image source={studyIcon} />
                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>
{/* ------------------------------------------------------------------------ */}
            {/* Botao dar aulas */}
            <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                <Image source={giveClassesIcon} />
                <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>
        </View>
        
        <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
    </View>
    );
}

export default Landing;