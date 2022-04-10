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

export default function LocationScreen() {
  const [backgroundImageHeight, setBackgroundImageHeight] = React.useState(0);

  const feedbackArray = [
    {
      text: 'Igraonica “Leptir” i u dvorištu i unutar objekta ima sadržaj za djecu u invalidskim kolicima. Moja kćerka bila je oduševljena.Tete su takođe jako pažljive.',
      up: 532,
      down: 5,
    },
    {
      text: 'Izletište “Borovi” ima divan prilaz ukoliko imate pratnju koja Vam može pomoći na uskim putevima.Restoran na vrhu takođe pristupačan.Jedino izbjegavati silazak do izvora, put je jako strm.',
      up: 314,
      down: 7,
    },
    {
      text: 'Butik “Lidija” u naselju Česma izuzetno pristupačan za lica sa invaliditetom čak i bez pratnje. Niski pragovi, veliko rastojanje između vješalica, prilagođene kabine, a i radnice su spremne pomoći.',
      up: 111,
      down: 6,
    },
    {
      text: 'Restoran “Bizarre” ima prilaz za invalidska kolica sa obje strane i rampu na stepenicama za drugi sprat. Čitav red stolova ima posebno mjesto za invalidska kolica, ali je potrebno rezervisati.',
      up: 330,
      down: 13,
    },
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
            {feedbackArray.map((item, index) => {
              return (
                <View
                  style={{
                    padding: 20,
                    margin: 10,
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                    borderBottomStartRadius: 20,
                    borderBottomEndRadius: 20,
                    backgroundColor: '#DCF6F3',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'Imprima-Regular',
                    }}>
                    {item.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 25,
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#A3E6DF',
                        padding: 10,
                        width: '30%',
                        alignItems: 'center',
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <FastImage
                        resizeMode={FastImage.resizeMode.contain}
                        source={require('../images/dodatno/yes.png')}
                        style={{aspectRatio: 1, width: 20}}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          fontFamily: 'Imprima-Regular',
                        }}>
                        {item.up}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        backgroundColor: '#A3E6DF',
                        padding: 10,
                        width: '30%',
                        alignItems: 'center',
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <FastImage
                        resizeMode={FastImage.resizeMode.contain}
                        source={require('../images/dodatno/no.png')}
                        style={{aspectRatio: 1, width: 20}}
                      />
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          fontFamily: 'Imprima-Regular',
                        }}>
                        {item.down}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>

      <Text
        style={{
          width: '100%',
          position: 'absolute',
          top: 25,
          color: 'black',
          fontFamily: 'Imprima-Regular',
          fontSize: 20,
          textAlign: 'center',
          paddingHorizontal: 20,
        }}>
        Mjesta pristupačna licima sa invaliditetom:
      </Text>

      <FastImage
        source={require('../images/dodatno/invalid_mjesta.png')}
        resizeMode={FastImage.resizeMode.contain}
        style={{
          position: 'absolute',
          top: 15,
          left: 10,
          width: 70,
          aspectRatio: 1,
        }}
      />
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
