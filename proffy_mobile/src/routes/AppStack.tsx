import React from 'react';

// importando pacotes de rotas de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

//importando componente que faz ligação com a rota
//esse componentes são nossas paginas
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                {/* Rota Landing */}
                <Screen name="Landing" component={Landing} />
                
                {/* Rota Dar aulas */}
                <Screen name="GiveClasses" component={GiveClasses} />

                {/* Rota Estudar */}
                {/* Pagina encadeada */}
                <Screen name="Study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;