import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import tileConstants from '../constants/tileConstants';

const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);

  const onSelectionPressed = id => {
    navigation.navigate('Input', {id});
  };

  return (
    <>
      <SafeAreaView
        style={
          (styles.container,
          {paddingTop: backgroundImageHeight, backgroundColor: '#1CB57C'})
        }>
        <FastImage
          source={require('../images/dodatno/background.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={
            (styles.background,
            {
              height: backgroundImageHeight,
              width: '100%',
              position: 'absolute',
            })
          }
          onLoad={evt =>
            setBackgroundImageHeight(
              (evt.nativeEvent.height / evt.nativeEvent.width) * width,
            )
          }
        />

        <View
          style={{
            borderRadiusTopLeft: 20,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            overflow: 'hidden',
          }}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 80,
              flexGrow: 1,
              padding: 20,
              paddingTop: 25,
              backgroundColor: 'white',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
            }}>
            <View style={styles.row}>
              <View style={styles.column}>
                {tileConstants.map((item, index) => {
                  if (index % 2 !== 0) return null;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => onSelectionPressed(item.id)}
                      style={{
                        height: (width / 2) * item.aspectRatio,
                        backgroundColor: item.color,
                        marginBottom: 15,
                        padding: 15,
                        borderRadius: 20,
                        marginRight: 7.5,
                      }}
                      key={item.id}>
                      <FastImage
                        source={item.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.tileImage}
                      />
                      <Text style={styles.tileText}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View style={styles.column}>
                {tileConstants.map((item, index) => {
                  if (index % 2 === 0) return null;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => onSelectionPressed(item.id)}
                      style={{
                        height: (width / 2) * item.aspectRatio,
                        backgroundColor: item.color,
                        marginBottom: 15,
                        padding: 15,
                        borderRadius: 20,
                        marginLeft: 7.5,
                      }}
                      key={item.id}>
                      <FastImage
                        source={item.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={styles.tileImage}
                      />
                      <Text style={styles.tileText}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          width: width * 0.22,
        }}
        onPress={() => navigation.navigate('Location')}
        activeOpacity={0.8}>
        <FastImage
          source={require('../images/dodatno/invalid_button.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.invalidButtonImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: width * 0.2,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Profile')}
        activeOpacity={0.8}>
        <FastImage
          source={require('../images/dodatno/myprofile.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={{aspectRatio: 1, borderRadius: 100, width: width * 0.17}}
        />
        <Text style={{color: 'black', textAlign: 'center', fontSize: 17}}>
          Moj profil
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          position: 'absolute',
          marginTop: 15,
          color: 'teal',
          fontFamily: 'Imprima-Regular',
          fontSize: 30,
          alignSelf: 'center',
          textAlign: 'center',
        }}>
        Ja,{'\n'}Građanin
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollStyle: {
    width: '100%',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Imprima-Regular',
  },
  tileImage: {
    flex: 1,
  },
  invalidButtonImage: {
    aspectRatio: 1,
  },
});
