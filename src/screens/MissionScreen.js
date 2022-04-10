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

const {width, height} = Dimensions.get('window');

export default function MissionScreen() {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);

  const imagesArr = [
    require('../images/misije/m1.png'),
    require('../images/misije/m2.png'),
    require('../images/misije/m3.png'),
    require('../images/misije/m4.png'),
    require('../images/misije/m5.png'),
    require('../images/misije/m6.png'),
    require('../images/misije/m7.png'),
  ];

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
            {imagesArr.map((image, index) => (
              <FastImage
                source={image}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                  width: '100%',
                  aspectRatio: 428 / 230,
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: '#ccc',
                  marginBottom: 20,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>

      <View
        style={{
          position: 'absolute',
          top: 30,
          width: width * 0.75,
          backgroundColor: '#fffffff0',
          padding: 20,
          borderRadius: 20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            width: '100%',
            color: 'black',
            fontFamily: 'Imprima-Regular',
            fontSize: 22,
            textAlign: 'center',
          }}>
          Vrijeme je za izazov!
        </Text>

        <Text
          style={{
            width: '100%',
            color: 'black',
            fontFamily: 'Imprima-Regular',
            fontSize: 17,
            textAlign: 'center',
            marginTop: 15,
          }}>
          Učestvuj u izazovima koje organizuje tvoj grad i osvoji dodatne bodove
          za odgovornog građanina
        </Text>
      </View>
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
