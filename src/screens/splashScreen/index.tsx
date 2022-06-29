import React, {useEffect, useState} from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import {getEpisodes} from '../../services/getEpisodes';

import {
  Container,
  Title,
  Header,
  Selector,
  Touchable,
  FlatListContainer,
  ModalContainer,
  ListItem,
  ListTitle,
} from './styles';

export function App() {
  const [season, setSeason] = useState([{}]);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [watchedEps, setWathcedEps] = useState([]);

  async function handleEpisodes(seasonSelected: number) {
    const episodes = await getEpisodes(seasonSelected);
    setSelectedSeason(seasonSelected);
    setSeason(episodes.data);
  }

  function handleSetWatchedEps(episode) {
    console.log(watchedEps.includes(episode));
    setWathcedEps([...watchedEps, episode]);
  }

  useEffect(() => {
    console.log(watchedEps);
  }, [watchedEps]);

  function handleModal(item) {
    setModalItem(item);
    setModalVisibility(true);
  }

  const renderItem = ({item}) => (
    <ListItem onPress={() => handleModal(item)}>
      <ListTitle size={15}>
        {item.episode} - {item.name}
      </ListTitle>
    </ListItem>
  );

  return (
    <Container>
      <Header>
        <Image
          style={{width: '90%', height: 110}}
          source={require('./../../assets/imgs/logo.png')}
        />
      </Header>
      <Selector>
        <Touchable
          onPress={() => handleEpisodes(1)}
          isSelected={selectedSeason}
          number={1}>
          <Title size={30}>1</Title>
        </Touchable>
        <Touchable
          onPress={() => handleEpisodes(2)}
          isSelected={selectedSeason}
          number={2}>
          <Title size={30}>2</Title>
        </Touchable>
        <Touchable
          onPress={() => handleEpisodes(3)}
          isSelected={selectedSeason}
          number={3}>
          <Title size={30}>3</Title>
        </Touchable>
        <Touchable
          onPress={() => handleEpisodes(4)}
          isSelected={selectedSeason}
          number={4}>
          <Title size={30}>4</Title>
        </Touchable>
        <Touchable
          onPress={() => handleEpisodes(5)}
          isSelected={selectedSeason}
          number={5}>
          <Title size={30}>5</Title>
        </Touchable>
      </Selector>
      <FlatListContainer>
        <FlatList
          data={season.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => {
            return <View style={{margin: 10}} />;
          }}
        />
      </FlatListContainer>

      <Modal visible={modalVisibility} animationType="fade">
        <ModalContainer>
          <Text>Episódio {modalItem.name}</Text>
          {!!!watchedEps.includes(modalItem.episode) && (
            <Button
              title="Já assisti o Episódio"
              onPress={() => handleSetWatchedEps(modalItem.episode)}
            />
          )}
          {watchedEps.includes(modalItem.episode) && (
            <Text> Já assisti o Episódio </Text>
          )}
          <Touchable onPress={() => setModalVisibility(false)}>
            <Title size={15}>x</Title>
          </Touchable>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
