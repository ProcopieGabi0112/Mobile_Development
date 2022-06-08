import React, { useContext, useState } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../components/context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUpScreen = () => {
    const navigation = useNavigation()
    const [username,setUsername] = useState(null);
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const {isLoading,register}= useContext(AuthContext);
    const val = useContext(AuthContext)
    const onRegisterPressed = () => { navigation.navigate('MainScreen');
                                     // register(username,email,password);
                                     };
    const onSignInPress = () => {    navigation.navigate('SignIn');  };
    const onTermsOfUsePressed = () => { console.warn('onTermsOfUsePressed'); };
    const onPrivacyPressed = () => { console.warn('onPrivacyPressed'); };
    
    return (
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
        <Spinner visible={isLoading}/>
        <View styles={styles.root}>
           <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder="Enter name" value={username} setValue={setUsername} onChangeText={text => setUsername(text)}/>
                <CustomInput placeholder="Enter email" value={email} setValue={setEmail} onChangeText={text => setEmail(text)}/>
                <CustomInput placeholder="Enter password" value={password} setValue={setPassword} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
                <CustomInput placeholder="Repeat password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} onChangeText={text => setPasswordRepeat(text)} />
           <CustomButton text="Register" onPress={onRegisterPressed} />
           <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Term of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
           <SocialSignInButtons/>
           <CustomButton text="Have an account? Sign in " onPress={onSignInPress} type="TERTIARY" />

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
   title:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
    marginTop:'10%',
    marginLeft:'15%'
   },
   text:{
       marginLeft: 25,
       marginRight: 25,
       marginTop: 5,
       color:'gray',
   },
   link:{
       color: '#FDB075',

   }
});

export default SignUpScreen;