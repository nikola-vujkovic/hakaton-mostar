import {View, Text} from 'react-native';
import React from 'react';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../images/nagrade/Account_background.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.upperContainer}>
          <View style={styles.upperTopContainer}>
            <View style={styles.PhotoContainer}>
              <FastImage
                style={{flex: 1, marginLeft: 30}}
                resizeMode={FastImage.resizeMode.cover}
                source={require('../images/nagrade/ProfileIcon.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Leon Ritan</Text>
              <View style={styles.locationContainer}>
                <FastImage
                  style={{height: 25, width: 15}}
                  resizeMode={FastImage.resizeMode.contain}
                  source={require('../images/nagrade/LocationIcon.png')}
                />
                <Text style={styles.locationText}>Mostar</Text>
              </View>

              <Text style={styles.medalText}>Građanin sa značkom</Text>
              <FastImage
                style={{width: 45, height: 60}}
                source={require('../images/nagrade/Goldmedalicon.png')}
              />
            </View>
          </View>
          <View style={styles.upperBottomContainer}>
            <TouchableOpacity style={styles.accountButton}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                  paddingHorizontal: 10,
                }}>
                Zaboravio/la sam šifru naloga
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.accountButton}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                Odjavi me
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lowerContainer}>
          <Pie
            radius={110}
            innerRadius={85}
            sections={[
              {
                percentage: 10,
                color: '#7091BB',
              },
              {
                percentage: 20,
                color: '#E9B55D',
              },
              {
                percentage: 30,
                color: '#D98585',
              },
              {
                percentage: 40,
                color: '#5FAD9F',
              },
            ]}
            dividerSize={6}
            strokeCap={'butt'}
          />
          <View
            style={{
              position: 'absolute',
              top: 70,
              left: 120,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              height: 120,
              width: 110,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 28,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                2000
              </Text>
              <Image
                style={{height: 40, width: 60, marginLeft: -5}}
                resizeMode={FastImage.resizeMode.cover}
                source={require('../images/nagrade/Golden_coin.png')}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 28,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                3
              </Text>
              <Image
                style={{height: 34, width: 34, marginLeft: 8}}
                resizeMode={FastImage.resizeMode.stretch}
                source={require('../images/nagrade/mission.png')}
              />
            </View>
          </View>
          <View style={{width: '100%', marginLeft: 60, marginTop: 5}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'flex-start',
              }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: '#7091BB',
                  borderRadius: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 5,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                Doniranje udruženjima
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                color: 'black',
                fontFamily: 'Imprima-Regular',
              }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: '#E9B55D',
                  borderRadius: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 5,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                Volontiranje
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: '#D98585',
                  borderRadius: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 5,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                Akcije dobrovoljnog davanja krvi
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: '#5FAD9F',
                  borderRadius: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 5,
                  color: 'black',
                  fontFamily: 'Imprima-Regular',
                }}>
                Doniranje sadnica
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperContainer: {
    height: '33%',
    width: '90%',
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 30,
    flexDirection: 'column',
  },
  upperTopContainer: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperBottomContainer: {
    flex: 0.35,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountButton: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  line: {
    height: 50,
    width: 3,
    backgroundColor: '#aaaaaa',
  },
  PhotoContainer: {
    flex: 0.45,
    paddingVertical: 20,
  },
  textContainer: {
    flex: 0.55,
    marginTop: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Imprima-Regular',
  },
  locationText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Imprima-Regular',
    marginTop: 2,
  },
  medalText: {
    fontSize: 15,
    marginTop: 14,
    color: 'black',
    fontFamily: 'Imprima-Regular',
    marginBottom: 3,
  },

  lowerContainer: {
    height: '52%',
    width: '90%',
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
  },
});
