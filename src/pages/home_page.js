import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-dynamic-vector-icons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    container: {
      paddingTop: 35,
      paddingHorizontal: 20,
    },
    iconAndProfileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    profilePicture: {
      width: 35,
      height: 35,
      alignSelf: 'center',
      borderRadius: 50,
      overflow: 'hidden',
    },
    text: {
      fontSize: 30,
      color: '#000000',
      fontWeight: '700',
    },
  },
  body: {
    container: {
      backgroundColor: '#fafafa',
      flex: 1,
      flexDirection: 'row',
      marginTop: 30,
    },
    sidebar: {
      width: 80,
      backgroundColor: '#fafafa',
      text: {
        transform: [{rotate: '-90deg'}],
        color: '#a5b79f',
        fontWeight: '500',
      },
      justifyContent: 'space-evenly',
    },
    content: {
      container: {
        backgroundColor: '#fafafa',
        flex: 1,
      },
      temHum: {
        container: {
          backgroundColor: '#ffffff',
          marginTop: 20,
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20,
          borderRadius: 20,
          shadowColor: 'gray',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 12,
          elevation: 1,
        },
        temContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        humContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 10,
        },
        icon: {
          paddingLeft: 10,
          paddingRight: 10,
        },
        label: {
          fontSize: 11,
          color: '#a5b79f',
        },
        value: {
          color: '#000000',
          fontWeight: '500',
        },
        separator: {
          height: 40,
          width: 1,
          backgroundColor: '#a5b79f',
        },
      },
      favPat: {
        container: {
          backgroundColor: '#ffffff',
          marginTop: 15,
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20,
          borderRadius: 20,
          shadowColor: 'gray',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 12,
          elevation: 1,
        },
        title: {
          fontSize: 16,
          marginTop: 25,
          fontWeight: '600',
          color: '#000000',
        },
        child: {
          container: {
            alignItems: 'center',
          },
          text: {
            marginTop: 15,
            fontSize: 11,
            color: '#a5b79f',
          },
        },
      },
      cardButtonContainer: {
        marginTop: 25,
        marginBottom: 20,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
      },
      cardButton: {
        left: {
          flex: 1,
          marginRight: 10,
        },
        right: {
          flex: 1,
          marginLeft: 5,
          marginRight: 20,
        },
        longButtonContainer: {
          padding: 15,
          flex: 2,
          borderRadius: 20,
          backgroundColor: '#a5b79f',
          justifyContent: 'space-between',
          shadowColor: 'gray',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 12,
          elevation: 1,
        },
        shortButtonContainer: {
          padding: 15,
          flex: 1,
          borderRadius: 20,
          backgroundColor: '#a5b79f',
          justifyContent: 'space-between',
          shadowColor: 'gray',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 12,
          elevation: 1,
        },
        text: {
          color: '#ffffff',
          fontWeight: '600',
        },
      },
    },
  },
  marginTop: value => {
    return {
      marginTop: value,
    };
  },
});

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header.container}>
        <View style={styles.header.iconAndProfileContainer}>
          <Icon
            name="hand"
            type="Entypo"
            size={30}
            color="#ffd75b"
            onPress={() => {}}
          />
          <Image
            source={require('../assets/image_empty_profile.png')}
            style={styles.header.profilePicture}
          />
        </View>
        <Text style={styles.header.text}>Good Morning,</Text>
        <Text style={styles.header.text}>Evan</Text>
      </View>
      <View style={styles.body.container}>
        <View style={[styles.body.sidebar]}>
          <TouchableOpacity>
            <Text style={styles.body.sidebar.text}>Living Room</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.body.sidebar.text}>Kitchen</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.body.sidebar.text}>Bedroom</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.body.sidebar.text}>Bathroom</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.body.sidebar.text}>Office</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body.content.container}>
          <View style={styles.body.content.temHum.container}>
            <View style={styles.body.content.temHum.temContainer}>
              <Icon
                name="thermometer"
                type="FontAwesome"
                color="#a5b79f"
                style={styles.body.content.temHum.icon}
              />
              <View>
                <Text style={styles.body.content.temHum.label}>
                  Temperatures
                </Text>
                <Text style={styles.body.content.temHum.value}>24 &deg;C</Text>
              </View>
            </View>
            <View style={styles.body.content.temHum.separator} />
            <View style={styles.body.content.temHum.humContainer}>
              <Icon
                name="water-outline"
                type="Ionicons"
                color="#a5b79f"
                style={styles.body.content.temHum.icon}
              />
              <View>
                <Text style={styles.body.content.temHum.label}>Humidity</Text>
                <Text style={styles.body.content.temHum.value}>38 %</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.body.content.favPat.title}>
              Favourite patterns
            </Text>
            <View style={styles.body.content.favPat.container}>
              <TouchableOpacity
                style={styles.body.content.favPat.child.container}>
                <Icon
                  name="door-closed"
                  type="FontAwesome5"
                  size={30}
                  color="#a06444"
                />
                <Text style={styles.body.content.favPat.child.text}>
                  I'am going out
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.body.content.favPat.child.container}>
                <Icon name="moon" type="Ionicons" size={30} color="#f6cd44" />
                <Text style={styles.body.content.favPat.child.text}>
                  Goodnight
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.body.content.favPat.child.container}>
                <Icon
                  name="star"
                  type="MaterialIcons"
                  size={30}
                  color="#f6cd44"
                />
                <Text style={styles.body.content.favPat.child.text}>
                  Turn on heater
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body.content.cardButtonContainer}>
            <View style={styles.body.content.cardButton.left}>
              <TouchableOpacity
                style={styles.body.content.cardButton.longButtonContainer}
                onPress={() => navigation.navigate('DetailPage')}>
                <Icon
                  name="lightbulb-on-outline"
                  type="MaterialCommunityIcons"
                  size={30}
                  color="#fafafa"
                />
                <Text style={styles.body.content.cardButton.text}>Light</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.body.content.cardButton.shortButtonContainer,
                  styles.marginTop(10),
                ]}>
                <Icon
                  name="rainy-outline"
                  type="Ionicons"
                  size={30}
                  color="#fafafa"
                />
                <Text style={styles.body.content.cardButton.text}>
                  Humidity
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body.content.cardButton.right}>
              <TouchableOpacity
                style={styles.body.content.cardButton.shortButtonContainer}>
                <Icon
                  name="thermometer"
                  type="FontAwesome"
                  size={30}
                  color="#fafafa"
                />
                <Text style={styles.body.content.cardButton.text}>
                  Temperature
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.body.content.cardButton.longButtonContainer,
                  styles.marginTop(10),
                ]}>
                <Icon
                  name="playlist-music"
                  type="MaterialCommunityIcons"
                  size={30}
                  color="#fafafa"
                />
                <Text style={styles.body.content.cardButton.text}>Music</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
