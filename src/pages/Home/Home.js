import React, {useState} from 'react'
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator} from 'react-native'

import {LinearGradient} from 'expo-linear-gradient'
import StatusBarPage from '../../components/StatusBarPage/StatusBarPage'
import MenuHamburguer from '../../components/MenuHamburguer'

import {saveLink, } from '../../utils/StoreLinks'

import {Feather} from '@expo/vector-icons'
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  Subtitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles'
import ModalLink from '../../components/ModalLink/ModalLink'

import api from '../../services/api'

export default Home = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [data, setData] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  async function handleShortLink() {
    setLoading(true)

    try {
      const response = await api.post('/shorten',
      {
        long_url: input
      })
      setData(response.data)
      setModalVisible(true)

      saveLink('MaiconLinks', response.data)

      setLoading(false)
      setInput('')
      Keyboard.dismiss()
    } catch (error) {
      alert('Ops parece que algo deu errado. :(')
      Keyboard.dismiss()
      setInput('')
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={["#1DDBB9", "#132742"]} style={{flex:1, justifyContent:"center"}}>
        <StatusBarPage barStyle="light-content" backgroundColor="#1DDBB9"/>

        <MenuHamburguer/>

        <KeyboardAvoidingView 
          behavior={Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
          <ContainerLogo>
            <Logo source={require('../../assets/Logo.png')} resizeMode="contain"/>
          </ContainerLogo>

          <ContainerContent>
            <Title>Links</Title>
            <Subtitle>Cole seu link para reduzir</Subtitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#FFF"/>
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {
                loading ? (
                  <ActivityIndicator color="#121212" size={26}/>
                ) : (
                  <ButtonLinkText>Gerar link</ButtonLinkText>
                )
              }
            </ButtonLink>
          </ContainerContent>

        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink onClose={() => setModalVisible(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}