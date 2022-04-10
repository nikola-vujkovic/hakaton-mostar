import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FastImage
        source={require('../images/nagrade/Account_background.jpg')}
        resizeMode={FastImage.resizeMode.cover}
        style={{height: '100%'}}
      />
      <View
        style={{
          position: 'absolute',
          width: '80%',
          backgroundColor: 'white',
          padding: 30,
          alignSelf: 'center',
          borderRadius: 20,
        }}>
        <TextInput
          style={{
            padding: 10,
            borderWidth: 2.5,
            borderColor: '#AEE9E3',
            borderRadius: 10,
            color: 'black',
            fontFamily: 'Imprima-Regular',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
          placeholderTextColor="#209C9C"
          placeholder="Email..."
        />
        <TextInput
          secureTextEntry={true}
          style={{
            padding: 10,
            borderWidth: 2.5,
            borderColor: '#AEE9E3',
            color: 'black',
            fontFamily: 'Imprima-Regular',
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
          placeholderTextColor="#209C9C"
          placeholder="Vaša šifra..."
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('TabNavigator')}
          style={{
            backgroundColor: '#209C9C',
            borderRadius: 100,
            padding: 20,
            paddingVertical: 10,
            width: '70%',
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Imprima-Regular',
            }}>
            Nastavite
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#209C9C',
              fontSize: 15,
              fontFamily: 'Imprima-Regular',
            }}>
            Zaboravili ste šifru?
          </Text>
          <Text
            style={{
              color: '#209C9C',
              fontSize: 15,
              fontFamily: 'Imprima-Regular',
            }}>
            Registrujte se
          </Text>
        </View>
      </View>

      <Text
        style={{
          position: 'absolute',
          top: '10%',
          color: 'teal',
          fontFamily: 'Imprima-Regular',
          fontSize: 35,
          alignSelf: 'center',
          textAlign: 'center',
          backgroundColor: '#fffffff0',
          padding: 10,
          borderRadius: 20,
        }}>
        Ja, Građanin
      </Text>

      <Text
        style={{
          position: 'absolute',
          top: '19%',
          color: 'gray',
          fontFamily: 'Imprima-Regular',
          fontSize: 22,
          alignSelf: 'center',
          textAlign: 'center',
          backgroundColor: '#fffffff0',
          padding: 10,
          borderRadius: 20,
        }}>
        Prijavite se na svoj nalog
      </Text>
    </View>
  );
}
