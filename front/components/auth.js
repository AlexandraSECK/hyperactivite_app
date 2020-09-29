import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Signup from './signUp';
import Home from './accueilParent';

export default class Auth extends React.Component {
    state = {
        title: "MyAPP",
        email: "",
        password: "",
        conected: false,
        signup: false
    }
    sign() {
        this.setState({ signup: true })
    }
    render() {
        if (!this.state.conected) {
            if (!this.state.signup) {
                return (
                    <View style={styles.container}>
                        <Text style={styles.title_text}>Hyperactivité</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Email..."
                                placeholderTextColor="#fff"
                                onChangeText={text => this.setState({ email: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Password..."
                                placeholderTextColor="#fff"
                                onChangeText={text => this.setState({ password: text })} />
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                        <Text style={styles.dont}>DON'T HAVE ACCOUNT ?</Text>
                        <TouchableOpacity onPress={() => this.sign()}>
                            <Text style={styles.loginText}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            else {
                return (
                    <Signup />
                )
            }
        }
        else {
            return (
                <Home />
            )
        }
    }

    login() {
        //this.setState({conected:true})
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_style: {
        flex: 3,
        backgroundColor: '#004A74'
    },
    title_text: {
        
        fontWeight: 'bold',
        fontSize: 38,
        paddingVertical: 50,
        textAlign: "center",
        color: '#F9FEFF'
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
