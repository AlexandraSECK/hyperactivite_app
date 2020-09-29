import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import Login from './auth';
import Home from './accueilParent';
import posttUser from '../API/server';

export default class signUp extends React.Component {
    constructor(props) {
        super(props)
        this.val = {
            nom: "",
            prenom: "",
            email: "",
            fonction: "enseignant",
            password: "",
        }
        this.state = {
            conected: false,
            login: false,
        }
    }
    auth() {
        this.setState({ login: true })
    }
    render() {
        if (!this.state.conected) {
            if (!this.state.login) {
                return (
                    <View style={styles.container}>
                        <Text style={styles.header}>Registrationn</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="First name..."
                                placeholderTextColor="#fff"
                                onChangeText={(text) => {this.val.nom = text}} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Last name..."
                                placeholderTextColor="#fff"
                                onChangeText={(text) => {this.val.prenom = text}}  />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Email..."
                                placeholderTextColor="#fff"
                                onChangeText={(text) => {this.val.email = text}}  />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password..."
                                placeholderTextColor="#fff"
                                onChangeText={(text) => {this.val.password = text}}  />
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => this.sign()}>
                            <Text style={styles.loginText}>SIGN UP</Text>
                        </TouchableOpacity>
                        <Text style={styles.dont}>YOU HAVE A ACCOUNT ?</Text>
                        <TouchableOpacity onPress={() => this.auth()}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else {
                return (
                    <Login />
                )
            }
        }
        else {
            return (
                <Home />
            )
        }
    }
    sign() {
        /*
        posttUser(this.val).then(data => {
            console.log(data);
        })
        */
        this.setState({ conected: true });
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        
        fontWeight: "bold",
        fontSize: 50,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginText: {
        color: "white",
        fontSize: 20
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#A5A14E",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10
    },
    dont: {
        marginTop: 10,
        marginBottom: 10,
        color: "#188C93",
        fontSize: 12
    }
});
