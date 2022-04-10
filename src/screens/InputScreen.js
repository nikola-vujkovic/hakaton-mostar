import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import inputConstants from '../constants/inputConstants';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Toast from 'react-native-simple-toast';

const {width, height} = Dimensions.get('window');

export default function InputScreen({navigation, route}) {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);
  const [hasPermission, setHasPermission] = React.useState(false);

  const inputSection = (type, value, id) => {
    if (type === 'qr') {
      useEffect(() => {
        if (id === 'prevoz') {
          setTimeout(() => {
            Toast.showWithGravity(
              `Uspješno ste skenirali kod! Dobili ste ${value} građanskih poena!`,
              Toast.LONG,
              Toast.TOP,
            );
          }, 10000);
        }
      }, []);

      React.useEffect(() => {
        (async () => {
          const status = await Camera.requestCameraPermission();
          setHasPermission(status === 'authorized');
        })();
      }, []);

      const devices = useCameraDevices();
      const device = devices.back;
      // const newCameraPermission = await Camera.requestCameraPermission();

      if (device == null) return <Text>Kamera se ucitava</Text>;
      return (
        <>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: width * 0.8,
                aspectRatio: 1,
                borderWidth: 3,
                borderRadius: 20,
                borderColor: 'teal',
                overflow: 'hidden',
              }}>
              {hasPermission && (
                <Camera style={{flex: 1}} device={device} isActive={true} />
              )}
            </View>
          </View>
        </>
      );
    }
    if (type === 'kod') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            style={{
              width: width * 0.9,
              padding: 20,
              backgroundColor: '#A3E6DF',
              borderRadius: 20,
            }}
            placeholderTextColor="#fff"
            placeholder="Unesite kod..."
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: width * 0.6,
              padding: 20,
              backgroundColor: '#50C0B1',
              marginTop: 20,
              borderRadius: 20,
            }}
            onPress={() => {
              Toast.showWithGravity(
                `Uspješno ste unijeli kod! Dobili ste ${value} građanskih poena!`,
                Toast.LONG,
                Toast.TOP,
              );
              navigation.goBack();
            }}>
            <Text
              style={{
                fontFamily: 'Imprima-Regular',
                textAlign: 'center',
                color: 'white',
                fontSize: 24,
              }}>
              Potvrdi
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (type === 'akcija') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FastImage
            source={require('../images/djela/image_akcijegrada.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={{aspectRatio: 1, width: width * 0.7}}
          />
        </View>
      );
    }
    if (type === 'lokacija') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              paddingLeft: 30,
              fontFamily: 'Imprima-Regular',
              fontSize: 20,
              paddingBottom: 3,
              paddingTop: 10,
            }}>
            Naziv mjesta i detaljan opis:
          </Text>
          <TextInput
            style={{
              width: width * 0.9,
              padding: 30,
              backgroundColor: '#A3E6DF',
              borderRadius: 20,
            }}
            placeholderTextColor="#fff"
            placeholder="Opis..."
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: width * 0.6,
              padding: 15,
              backgroundColor: '#50C0B1',
              marginTop: 20,
              borderRadius: 20,
            }}
            onPress={() => {
              Toast.showWithGravity(
                `Vaša informacija je uspješno objavljena!`,
                Toast.LONG,
                Toast.TOP,
              );
              navigation.goBack();
            }}>
            <Text
              style={{
                fontFamily: 'Imprima-Regular',
                textAlign: 'center',
                color: 'white',
                fontSize: 24,
              }}>
              Potvrdi
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (type === 'racun') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              paddingLeft: 30,
              fontFamily: 'Imprima-Regular',
              fontSize: 20,
              paddingBottom: 3,
            }}>
            Ime poslovnice:
          </Text>
          <TextInput
            style={{
              width: width * 0.9,
              padding: 20,
              backgroundColor: '#A3E6DF',
              borderRadius: 20,
            }}
            placeholderTextColor="#fff"
            placeholder="npr. caffe bar “Rock”"
          />
          <Text
            style={{
              color: 'black',
              alignSelf: 'flex-start',
              paddingLeft: 30,
              fontFamily: 'Imprima-Regular',
              fontSize: 20,
              paddingBottom: 3,
              paddingTop: 10,
            }}>
            Datum kada nije izdat račun:
          </Text>
          <TextInput
            style={{
              width: width * 0.9,
              padding: 20,
              backgroundColor: '#A3E6DF',
              borderRadius: 20,
            }}
            placeholderTextColor="#fff"
            placeholder="npr. 22/03/2022"
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: width * 0.6,
              padding: 20,
              backgroundColor: '#50C0B1',
              marginTop: 20,
              borderRadius: 20,
            }}
            onPress={() => {
              Toast.showWithGravity(
                `Vaša informacija je uspješno objavljena!`,
                Toast.LONG,
                Toast.TOP,
              );
              navigation.goBack();
            }}>
            <Text
              style={{
                fontFamily: 'Imprima-Regular',
                textAlign: 'center',
                color: 'white',
                fontSize: 24,
              }}>
              Potvrdi
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
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
          height: height - backgroundImageHeight,
        }}>
        <View
          style={{
            paddingBottom: 20,
            flex: 1,
            paddingTop: 25,
            backgroundColor: 'white',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          }}>
          {inputSection(
            inputConstants[route.params.id].type,
            inputConstants[route.params.id].value,
            route.params.id,
          )}

          <View
            style={{
              backgroundColor: '#E7F5F4',
              width: '100%',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              padding: 30,
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Imprima-Regular',
                fontSize: 20,
              }}>
              {inputConstants[route.params.id].text}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                  fontSize: 26,
                  textAlign: 'center',
                }}>
                1 x{' '}
              </Text>
              <FastImage
                source={inputConstants[route.params.id].image}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: width * 0.2, aspectRatio: 1}}
              />
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                  fontSize: 26,
                  textAlign: 'center',
                }}>
                {' '}
                = {inputConstants[route.params.id].value}
              </Text>
              <FastImage
                source={require('../images/dodatno/coin.png')}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: width * 0.1, aspectRatio: 1}}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
