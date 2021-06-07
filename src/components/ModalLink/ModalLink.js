import React from 'react'
import {View, TouchableOpacity, TouchableWithoutFeedback, Share} from 'react-native'

import {Feather} from '@expo/vector-icons'
import Clipboard from 'expo-clipboard'

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,

} from './styles'


export default ModalLink = ({onClose, data}) =>{

  function copyLink() {
    Clipboard.setString(data.link)
    alert('Link copiado para área de transferencia')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link => ${data.link}`
      });

      if(result.action === Share.sharedAction) {
        if(result.activityType) {
        } else {
          alert("Compartilhado com sucesso!")
        }
      } else if(result.action === Share.dismissedAction) {
        //
      }
    }
    catch(e) {
      alert(e.message)
    }
  }

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30}/>
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>

            <TouchableOpacity onPress={copyLink}>
            <Feather name="copy" color="#FFF" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>

        </LinkArea>
      </Container>
    </ModalContainer>
  )
}
