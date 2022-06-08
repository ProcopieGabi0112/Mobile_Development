import React,{useContext,useState} from 'react'
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import Logo from './assets/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../components/context/AuthContext';

const SignInScreen = () => {
  
    const [username,setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const val = useContext(AuthContext);
    const onSignInPressed = () => {      // validate user
                                         navigation.navigate('FirebaseLogin');   };
    const onForgotPasswordPressed = () => {  navigation.navigate('ForgotPassword');  };
    const onSignUpPress = () => {  navigation.navigate('SignUp');  };
    const navigation = useNavigation();
    
    return (
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
        <View styles={styles.root}>
           <Image source={Logo} styles={styles.logo} resizeMode="contain"/>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} onChangeText={ text => setUsername(text)}/>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
           <SocialSignInButtons/>
           <CustomButton text="Don't have an account? Create one " onPress={onSignUpPress} type="TERTIARY" />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
   root:{
     justifyContent:'center',  
     alignItems:'center',
     padding: 30,
     backgroundColor:'#F9FBFC',

   },
    logo:{
       width:'70%',
       maxWidth: 300,
       maxHeight:200,
       },
});

export default SignInScreen;