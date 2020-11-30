import Auth0 from "react-native-auth0";
import useMountEffect from '@customHooks/useMountEffect';
import {AppRoute} from '@navigation/app-routes';
import {useNavigation} from '@react-navigation/native';
import {LocalizationContext} from '@translations/Translations';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
    ActivityIndicator,
    Alert,
    Button,
    FlatList,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

type StoreProps = {
    credentials: any;
};

type DispatchProps = {
    loggingIn: () => void;
};

const auth0 = new Auth0({ domain: 'kb419.auth0.com', clientId: 'G6GsTFJ5icKQXrnhM1USycsmTpalxyqq' });

type Props = StoreProps & DispatchProps;
const LoginScreen = (props: Props) => {
    const {credentials, loggingIn} = props;
    const navigation = useNavigation();
    const {translations} = useContext(LocalizationContext);

    useMountEffect(() => {
        // loggingIn();
    });

    const doLogin = () => {
        auth0.webAuth.authorize({scope: 'openid profile email'})
            .then(credentials => {
                // Successfully authenticated - store creds
                console.log(credentials)
                navigation.navigate(AppRoute.Competitions);
            })
            .catch(error => {
                console.log(error)
            });
    };

    const doLogout = () => {
        auth0.webAuth.clearSession()
            .then(success => {
                // this.setState({ accessToken: null });    
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };

    return (
        <SafeAreaView>
          <Button onPress={doLogin} title="Login" />
          <Button onPress={doLogout} title="Logout" />
        </SafeAreaView>
    );    
};

export default LoginScreen;
