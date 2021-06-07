import AsyncStorage from '@react-native-async-storage/async-storage';

//Salvar o link no storage
export async function saveLink(key, newLink) {
  let linkStored = await getLinksSave(key);

  // Verifica se existe o link com mesmo id
  const hasLink = linkStored.some(link => link.id === newLink.id)
  if(hasLink) {
    alert('Link já existe na lista');
    return;
  }

  linkStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linkStored));
  alert("salvo com sucesso")
}

//Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

//Deletar o link especifico
export async function deleteLink(links, id) {
  let myLinks = links.filter(item => item.id!== id);

  await AsyncStorage.setItem('MaiconLinks', JSON.stringify(myLinks));

  alert("Item deletado");

  return myLinks;
}