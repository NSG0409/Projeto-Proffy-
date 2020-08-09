import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';



const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs(){
    return (
        <Navigator
            // {/* Pagina encadeada */}

            tabBarOptions={{
                style: {
                    // configuração para trabalhar com sombras
                    //é o box-shadow praticamente
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle:{
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                //cor na aba quando ta inativa
                inactiveBackgroundColor: '#fafafc',
                //cor da aba quando ela ta ativa
                activeBackgroundColor: '#ebebf5',
                //cor da letra da aba inativa
                inactiveTintColor:'#c1bccc',
                //bor da letra da aba ativa
                activeTintColor: '#32264d'
            }}
        >
            {/* // Aba Proffys */}
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                //labe da tab 
                options= {{
                    tabBarLabel: 'Prrofys',
                    //pega as variaves com a desestruturação
                    //e escolhendo 2 para poder estilizar o Ionicons
                    //aonde esta o nosso ico puxado do pacote 
                    //nele estilizamos tamanho e nome do icone é 'ios-easel'
                    tabBarIcon: ({color, size, focused}) =>{
                        return (
                            <Ionicons name='ios-easel' size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />

            {/* Aba Favoritos */}
            <Screen 
                name="Favorites" 
                component={Favorites} 
                options= {{
                    tabBarLabel: 'Favoritos',
                    //pega as variaves com a desestruturação
                    //e escolhendo 2 para poder estilizar o Ionicons
                    //aonde esta o nosso ico puxado do pacote 
                    //nele estilizamos tamanho e nome do icone é 'ios-easel'
                    tabBarIcon: ({color, size, focused}) =>{
                        return (
                            <Ionicons name='ios-heart' size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }
                }}
            />  
        
        </Navigator>
    );
}

export default StudyTabs;