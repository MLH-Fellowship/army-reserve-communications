import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';

import { 
    Screen, 
    AppFormField, 
    AppForm, 
    SubmitButton 
} from '../../components';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});


function LoginScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
            
            <AppForm
                initialValues={{ 
                    email: '', 
                    password: ''
                    }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <View style={{paddingBottom: 140}}>
                    <Text style={styles.text} >Login Screen</Text>
                </View>

                <View style={styles.input_container}>
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email Address"  
                        textContentType="emailAddress" 
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock" 
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                </View>
     
                <View style={styles.button_container} >
                    <SubmitButton title="Login" />
                </View>
            </AppForm>

                <TouchableOpacity 
                    style={{ alignSelf: 'center', marginBottom: 25 }} 
                    onPress={() => navigation.navigate("Register")} >
                    <Text style={{color: '#9b6be8'}}>Don't have an account?</Text>
                </TouchableOpacity>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button_container: {
        paddingHorizontal: '5%',
        marginBottom: 60,
        marginTop: 30,
    },
    input_container: {
        paddingHorizontal: '5%',        
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
    }
})

export default LoginScreen;