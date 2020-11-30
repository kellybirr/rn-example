import Auth0 from "react-native-auth0";
import useMountEffect from '@customHooks/useMountEffect';
import {AppRoute} from '@navigation/app-routes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {LocalizationContext} from '@translations/Translations';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginRouteProp} from '@navigation/AppNavigator';
import {Button, FlatList} from 'react-native';

type StoreProps = {
    credentials: any;
};

type DispatchProps = {
    loggingIn: () => void;
};

const auth0 = new Auth0({ domain: 'kb419.auth0.com', clientId: 'G6GsTFJ5icKQXrnhM1USycsmTpalxyqq' });

type Props = StoreProps & DispatchProps;
const LoginScreen = (props: Props) => {
    const route = useRoute<LoginRouteProp>();
    const action = route.params['action'];

    const {credentials, loggingIn} = props;
    const navigation = useNavigation();
    const {translations} = useContext(LocalizationContext);

    var loggedIn: boolean = false;

    useMountEffect(() => {
        // loggingIn();
    });

    const doLogin = () => {
        auth0.webAuth.authorize({scope: 'openid profile email'})
            .then(credentials => {
                // Successfully authenticated - store creds
                console.log(credentials)
                loggedIn = true;
                setTimeout(() => {
                    navigation.navigate(AppRoute.Competitions);
                }, 500);
            })
            .catch(error => {
                console.log(error)
            });
    };

    const doLogout = () => {
        auth0.webAuth.clearSession()
            .then(success => {
                // this.setState({ accessToken: null });   
                console.log('log out success');
                loggedIn = false; 
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };

    switch (action) {
        case "logout":
            doLogout();
            break;
        default:
            doLogin();
            break;
    }

    return (
        <SafeAreaView>
          {!loggedIn && <Button onPress={doLogin} title={translations.login} />}
          {loggedIn && <Button onPress={doLogout} title={translations.logout} />}
        </SafeAreaView>
    );    
};

export default LoginScreen;
