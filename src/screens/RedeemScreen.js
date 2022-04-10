import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';

export default function RedeemScreen() {
  return (
    <SafeAreaView style={styles.generalContainer}>
      <View style={styles.titleContainer}>
        <ImageBackground
          source={require('../images/dodatno/background.png')}
          resizeMode="contain"
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View style={styles.titleBubble}>
            <Text
              style={{
                fontSize: 22,
                color: '#000000',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontFamily: 'Imprima-Regular',
              }}>
              Izaberi nagradu!
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: '#222222',
                textAlign: 'center',
                textAlignVertical: 'center',
                marginTop: 5,
                fontFamily: 'Imprima-Regular',
              }}>
              U saradnji sa našim partnerima pripremili smo razne pogodnosti za
              naše odgovorne građane.
            </Text>
          </View>
          <View
            style={{
              height: 30,
              width: '100%',
              backgroundColor: '#ffffff',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
        </ImageBackground>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView overScrollMode="never">
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 30,
                  height: 3,
                  marginTop: 18,
                  marginLeft: 20,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 26,
                  textAlignVertical: 'center',
                  marginHorizontal: 10,
                  color: '#000000',
                  fontFamily: 'Imprima-Regular',
                }}>
                Zabava
              </Text>
              <View
                style={{
                  width: 220,
                  height: 3,
                  marginTop: 18,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 170,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 70,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/PoolIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}bazen
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 120,
                      width: 110,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Cinemaicon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}kino
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 80,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Concerticon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}koncert
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>

          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 30,
                  height: 3,
                  marginTop: 18,
                  marginLeft: 20,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 26,
                  textAlignVertical: 'center',
                  marginHorizontal: 10,
                  fontFamily: 'Imprima-Regular',
                  color: 'black',
                }}>
                Kultura
              </Text>
              <View
                style={{
                  width: 220,
                  height: 3,
                  marginTop: 18,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 170,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 70,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/MuseumIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Ulaznica za{'\n'}muzej
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 120,
                      width: 90,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/GalleryIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Ulaznica za{'\n'}galeriju
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 80,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/LibraryIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Članarina za{'\n'}biblioteku
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 170,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 70,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/TheaterIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}pozorište
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 120,
                      width: 90,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Childrentheatre.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za dječije{'\n'}pozorište
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'column',
                  width: 100,
                  height: 150,
                  alignItems: 'center',
                }}></View>
            </View>
            <View></View>
          </View>

          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 30,
                  height: 3,
                  marginTop: 18,
                  marginLeft: 20,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 26,
                  textAlignVertical: 'center',
                  marginHorizontal: 10,
                  fontFamily: 'Imprima-Regular',
                  color: 'black',
                }}>
                Prevoz
              </Text>
              <View
                style={{
                  width: 220,
                  height: 3,
                  marginTop: 18,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 170,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 120,
                      width: 130,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Busicon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}autobus
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 100,
                      width: 110,
                      marginTop: 5,
                      paddingLeft: 15,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Bikeicon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}rent-a-bike
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 90,
                      width: 100,
                      marginTop: -20,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/ParkingIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Karta za{'\n'}parking
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>

          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 30,
                  height: 3,
                  marginTop: 18,
                  marginLeft: 20,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <Text
                style={{
                  fontSize: 26,
                  textAlignVertical: 'center',
                  marginHorizontal: 10,
                  fontFamily: 'Imprima-Regular',
                  color: 'black',
                }}>
                Humanost
              </Text>
              <View
                style={{
                  width: 220,
                  height: 3,
                  marginTop: 18,
                  backgroundColor: '#222222',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: 170,
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 10,
                      height: 80,
                      width: 90,
                      marginTop: 5,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/Donationicon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Doniraj u fond{'\n'}za oboljele
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 100,
                    height: 150,
                    alignItems: 'center',
                  }}>
                  <FastImage
                    style={{
                      flex: 1,
                      marginHorizontal: 20,
                      height: 150,
                      width: 150,
                      marginTop: 0,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    source={require('../images/nagrade/RedphoneIcon.png')}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      fontFamily: 'Imprima-Regular',
                      color: 'black',
                    }}>
                    Humanitarni broj
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'column',
                  width: 100,
                  height: 150,
                  alignItems: 'center',
                }}></View>
            </View>
            <View></View>
          </View>

          <View style={{height: 100}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 0.274,
    width: '100%',
  },
  contentContainer: {
    flex: 0.71,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  titleBubble: {
    width: '75%',
    backgroundColor: '#fffffff0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
});
