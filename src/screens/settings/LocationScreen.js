import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    } from "react-native";
import { Screen, AppFormField, AppForm, SubmitButton } from "../../components";
import { auth } from '../../firebase/firebase';

function LocationScreen({ navigation }) {

    return (
    <Screen style={styles.container}>
      <View>
        <Text style={[styles.title, {marginTop: 30}]}> {auth.currentUser.email}</Text>
        <View style={styles.form}>
            <AppForm
                initialValues={{
                    email: ''
                }}
            >
                <Text style={styles.subtitle}> Current Location</Text>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={true}
                    keyboardType="default"
                    name="location"
                    placeholder="Current Location"
                />

                <Text style={styles.subtitle}> New Location</Text>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    name="newLocation"
                    placeholder="New Location"
                />
            </AppForm>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    form: {
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'bold',
    }
})

export default LocationScreen; 