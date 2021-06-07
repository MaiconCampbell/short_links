import React, {useState, useEffect} from 'react'
import {Text, Modal, ActivityIndicator} from 'react-native'
import {useIsFocused} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage/StatusBarPage'
import MenuHamburguer from '../../components/MenuHamburguer'
import ListItem from '../../components/ListItem'
import ModalLink from '../../components/ModalLink/ModalLink'

import {getLinksSave, deleteLink} from '../../utils/StoreLinks'

import {Container, ListLinks, Title, ContainerEmty, WarnigText, Icon} from './styles'

export default props => {
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [links, setLinks] = useState([])
  const [data, setData] = useState({})

  const isFocudes = useIsFocused()

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('MaiconLinks')
      setLinks(result)
      setLoading(false)
    }

    getLinks()
  }, [isFocudes])

  function handleItem(item) {
    setData(item)
    setModalVisible(true)
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id)
    setLinks(result)
  }

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#1DDBB9"/>

      <MenuHamburguer/>

      <Title>Meus Links</Title>

      { loading && (
        <ContainerEmty>
          <ActivityIndicator color="#FFF" size={30}/>
      </ContainerEmty>
      )}

      {!loading && links.length === 0 && (
        <ContainerEmty>
          <Icon>📌</Icon>
          <WarnigText>Você ainda não possui nenhum link</WarnigText>
        </ContainerEmty>
      )}

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => 
          <ListItem data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
          />}
        contentContainerStyle={{paddingBottom: 20}}
        showVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
  </Container>
  )
}