import React from 'react'
import { FormHeaderContainer } from './styles'
import { FORMHEADERPROPS } from './types'
import Input from '../layouts/Input'
import Button from '../layouts/Button'
import { Text } from 'react-native'

const FormHeader: React.FC<FORMHEADERPROPS> = ({
    onSubmit,
    changeValue
}) => {

    return (
        <FormHeaderContainer>
            <Input style={{ width: '80%'}}  onChangeText={ text => changeValue(text)} placeholder='search...'/>
            <Button onPress={onSubmit}>
                <Text style={{ color: 'white'}}>Buscar</Text>
            </Button>
        </FormHeaderContainer>
    )
    
}

export default FormHeader