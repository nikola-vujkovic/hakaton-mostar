import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';

export default function RedeemScreen() {
  return (
    <SafeAreaView style={styles.generalContainer}>
      <View style={styles.titleContainer}>
        <ImageBackground 
        source={require('../images/dodatno/background.png')}
        resizeMode="contain"
        style={{height: '100%', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={styles.titleBubble}>
          <Text style={{fontSize: 32, color: '#000000', textAlign: 'center', textAlignVertical: 'center'}}>Izaberi nagradu!</Text>
          <Text style={{fontSize: 20, color: '#222222', textAlign: 'center', textAlignVertical: 'center', marginTop: 5}}>U saradnji sa našim partnerima pripremili smo razne pogodnosti za naše odgovorne građane.</Text>
        </View>
        <View style={{height: 30, width: '100%', backgroundColor: '#ffffff', borderTopLeftRadius: 30, borderTopRightRadius: 30}}/>
        </ImageBackground>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 30, height: 3, marginTop: 18, marginLeft: 20, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
              <Text style={{fontSize: 26, textAlignVertical: 'center', marginHorizontal: 10, color: '#000000'}}>Zabava</Text>
              <View style={{width: 220, height: 3, marginTop: 18, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 170}}>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 70, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/PoolIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}bazen</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 120, width: 110, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Cinemaicon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}kino</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 80, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Concerticon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}koncert</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View>

            </View>
          </View>

          <View style={{}}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 30, height: 3, marginTop: 18, marginLeft: 20, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
              <Text style={{fontSize: 26, textAlignVertical: 'center', marginHorizontal: 10, color: '#000000'}}>Kultura</Text>
              <View style={{width: 220, height: 3, marginTop: 18, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 170}}>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 70, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/MuseumIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Ulaznica za{'\n'}muzej</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 120, width: 90, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/GalleryIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Ulaznica za{'\n'}galeriju</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 80, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/LibraryIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Članarina za{'\n'}biblioteku</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View>

            </View>
          </View>


          <View style={{}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 170}}>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 70, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/TheaterIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}pozorište</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 120, width: 90, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Childrentheatre.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za dječije{'\n'}pozorište</Text>
              </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              </View>
            </View>
            <View>

            </View>


            
          </View>


          <View style={{}}>
          <View style={{flexDirection: 'row'}}>
              <View style={{width: 30, height: 3, marginTop: 18, marginLeft: 20, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
              <Text style={{fontSize: 26, textAlignVertical: 'center', marginHorizontal: 10, color: '#000000'}}>Prevoz</Text>
              <View style={{width: 220, height: 3, marginTop: 18, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 170}}>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 120, width: 130, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Busicon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}autobus</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 100, width: 110, marginTop: 5, paddingLeft: 15}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Bikeicon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}rent-a-bike</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 90, width: 100, marginTop: -20}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/ParkingIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Karta za{'\n'}parking</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View>

            </View>

          </View>


          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 30, height: 3, marginTop: 18, marginLeft: 20, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
              <Text style={{fontSize: 26, textAlignVertical: 'center', marginHorizontal: 10, color: '#000000'}}>Humanost</Text>
              <View style={{width: 220, height: 3, marginTop: 18, backgroundColor: '#222222', alignItems: 'center', justifyContent: 'center'}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', height: 170}}>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 10, height: 80, width: 90, marginTop: 5}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/Donationicon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Doniraj u fond{'\n'}za oboljele</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              <FastImage
                style={{flex: 1, marginHorizontal: 20, height: 150, width: 150, marginTop: 0}}
                resizeMode={FastImage.resizeMode.contain}
                source={require('../images/nagrade/RedphoneIcon.png')}
              />
                <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 16}}>Humanitarni broj</Text>
              </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'column', width: 100, height: 150, alignItems: 'center'}}>
              </View>
            </View>
            <View>

            </View>
          </View>

          <View style={{height: 100}}/>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    flex: 0.29,
    width: '100%'
  },
  contentContainer: {
    flex: 0.71,
    backgroundColor: '#ffffff',
    width: '100%'
  },
  titleBubble: {
    height: 160,
    width: '90%',
    backgroundColor: '#ffffff',
    opacity: 0.9,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})