
import React, { useEffect, useRef } from 'react'
import {  BackHandler, StatusBar,  KeyboardAvoidingView, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' //
import RootStack from './RootStack'
import { ThemeProvider } from 'styled-components'
import { ThemeApp } from '../assets/Theme'
const rotasParaFechaApp = ['']

const Routes = () => {
    const nav:any = useRef();

    useEffect( () => {

        const backAction = () => {
            
            if(nav.current) {
                
                const rotaAtual = nav.current.getCurrentRoute() 
     
                if (rotasParaFechaApp.includes(rotaAtual.name)) {
                    BackHandler.exitApp()
                    return false
                } 
            } 
            
            nav.current.goBack()
            
            return true;
        };
    
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => backHandler.remove();
    },[])

    return (
        <React.Fragment>
            <ThemeProvider theme={ThemeApp(false)} >
                <StatusBar backgroundColor={'black'} />
                <NavigationContainer ref={nav}>
                    <KeyboardAvoidingView behavior={'padding'} style={{ flex:1 }} keyboardVerticalOffset={Platform.OS == 'ios' ? undefined : -400} >
                        <RootStack />   
                    </KeyboardAvoidingView>
                </NavigationContainer>
            </ThemeProvider>
        </React.Fragment>
    )
}
export default Routes
