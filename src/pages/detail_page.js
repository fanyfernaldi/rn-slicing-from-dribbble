import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-dynamic-vector-icons';
import {Slider} from '@miblanchard/react-native-slider';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    top: {
      container: {
        flexDirection: 'row',
      },
      left: {
        width: 50,
        height: 40,
        backgroundColor: '#a5b79f',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 20,
      },
      right: {
        flex: 1,
      },
    },
    backButtonAndTitle: {
      container: {
        flexDirection: 'row',
      },
      left: {
        container: {
          backgroundColor: '#a5b79f',
        },
        backButtonContainer: {
          marginLeft: 15,
          backgroundColor: '#ffffff',
          width: 35,
          height: 40,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        backButtonIcon: {
          justifyContent: 'center',
        },
      },
      right: {
        container: {
          marginLeft: 17,
          justifyContent: 'center',
        },
        title: {
          fontSize: 25,
          fontWeight: '700',
        },
        switch: {
          alignSelf: 'flex-end',
          flex: 1,
          marginRight: 17,
        },
      },
    },
  },
  body: {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    sidebar: {
      width: 50,
      backgroundColor: '#a5b79f',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 10,
      iconSelected: {
        backgroundColor: '#bccbb9',
        padding: 8,
        borderRadius: 4,
      },
      iconUnselected: {
        padding: 8,
        borderRadius: 4,
      },
    },
    content: {
      container: {
        flex: 1,
        paddingHorizontal: 17,
      },
      subtitle: {
        color: '#a5b79f',
        fontWeight: '600',
      },
      schedule: {
        container: {
          backgroundColor: 'white',
          marginTop: 20,
          padding: 12,
          borderRadius: 20,
          shadowColor: 'black',
          shadowOpacity: 0.5,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 20,
          elevation: 2,
        },
        title: {
          fontSize: 12,
          fontWeight: '700',
        },
        keyValue: {
          container: {
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          key: {
            fontSize: 11,
            color: '#a5b79f',
          },
          value: {
            container: {
              padding: 8,
              backgroundColor: '#ffffff',
              borderRadius: 8,
              shadowColor: 'black',
              shadowOpacity: 0.5,
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 20,
              elevation: 1,
            },
            text: {
              fontSize: 11,
              fontWeight: '700',
            },
          },
        },
      },
      imageAndSlider: {
        container: {
          // flex: 1,
          flexDirection: 'row',
          // justifyContent: 'space-between',
        },
        image: {
          marginTop: 30,
          width: 170,
          height: 450,
          flex: 1,
        },
        labelAndSliderWrapper: {
          marginTop: 30,
          alignItems: 'center',
          backgroundColor: 'red',
          flex: 1,
        },
        label: {
          fontSize: 12,
          fontWeight: '600',
          color: '#a5b79f',
          textAlign: 'center',
        },
        slider: {
          flex: 1,
          width: 350,
          justifyContent: 'center',
          backgroundColor: 'blue',
        },
      },
    },
  },
});

const DetailPage = ({navigation}) => {
  const [selectedMenu, setSelectedMenu] = useState(2);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textFrom, setTextFrom] = useState('08.00 AM');
  // const [textTo, setTextTo] = useState('10.00 AM');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(!show);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + '.' + tempDate.getMinutes();
    let amOrPm = tempDate.getHours() > 12 ? 'PM' : 'AM';
    setTextFrom(fTime + ' ' + amOrPm);

    console.log('fTime', fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header.top.container}>
        <View style={styles.header.top.left} />
        <View style={styles.header.top.right} />
      </View>
      <View>
        <View style={styles.header.backButtonAndTitle.container}>
          <View style={styles.header.backButtonAndTitle.left.container}>
            <View
              style={styles.header.backButtonAndTitle.left.backButtonContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back"
                  type="MaterialIcons"
                  size={22}
                  color="#000000"
                  style={styles.header.backButtonAndTitle.left.backButtonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header.backButtonAndTitle.right.container}>
            <Text style={styles.header.backButtonAndTitle.right.title}>
              Floor Lamp
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#a5b79f'}}
            thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.header.backButtonAndTitle.right.switch}
          />
        </View>
      </View>
      <View style={styles.body.container}>
        <View style={styles.body.sidebar}>
          <TouchableOpacity
            style={
              selectedMenu === 0
                ? styles.body.sidebar.iconSelected
                : styles.body.sidebar.iconUnselected
            }
            onPress={() => setSelectedMenu(0)}>
            <Icon
              name="sofa"
              type="MaterialCommunityIcons"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedMenu === 1
                ? styles.body.sidebar.iconSelected
                : styles.body.sidebar.iconUnselected
            }
            onPress={() => setSelectedMenu(1)}>
            <Icon
              name="kitchen"
              type="MaterialIcons"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedMenu === 2
                ? styles.body.sidebar.iconSelected
                : styles.body.sidebar.iconUnselected
            }
            onPress={() => setSelectedMenu(2)}>
            <Icon
              name="bed-king-outline"
              type="MaterialCommunityIcons"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedMenu === 3
                ? styles.body.sidebar.iconSelected
                : styles.body.sidebar.iconUnselected
            }
            onPress={() => setSelectedMenu(3)}>
            <Icon name="bath" type="FontAwesome" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedMenu === 4
                ? styles.body.sidebar.iconSelected
                : styles.body.sidebar.iconUnselected
            }
            onPress={() => setSelectedMenu(4)}>
            <Icon
              name="chair-rolling"
              type="MaterialCommunityIcons"
              size={20}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body.content.container}>
          <Text style={styles.body.content.subtitle}>Bedroom</Text>
          <View style={styles.body.content.schedule.container}>
            <Text style={styles.body.content.schedule.title}>Schedule</Text>
            <View style={styles.body.content.schedule.keyValue.container}>
              <Text style={styles.body.content.schedule.keyValue.key}>
                from
              </Text>
              <TouchableOpacity
                style={styles.body.content.schedule.keyValue.value.container}
                onPress={() => showMode('time')}>
                <Text style={styles.body.content.schedule.keyValue.value.text}>
                  {textFrom}
                </Text>
              </TouchableOpacity>
              <Text style={styles.body.content.schedule.keyValue.key}>to</Text>
              <TouchableOpacity
                style={styles.body.content.schedule.keyValue.value.container}>
                <Text style={styles.body.content.schedule.keyValue.value.text}>
                  10.00 AM
                </Text>
              </TouchableOpacity>
              <Icon
                name="arrow-forward"
                type="MaterialIcons"
                size={22}
                color="#000000"
              />
            </View>
          </View>
          <View style={styles.body.content.imageAndSlider.container}>
            <Image
              source={require('../assets/lamp2.png')}
              style={styles.body.content.imageAndSlider.image}
            />
            <View
              style={styles.body.content.imageAndSlider.labelAndSliderWrapper}>
              <Text style={styles.body.content.imageAndSlider.label}>
                Brightness
              </Text>
              <Text style={styles.body.content.imageAndSlider.label}>
                Level
              </Text>
              <Slider
                thumbTintColor="#fecf4c"
                minimumTrackTintColor="#fecf4c"
                maximumTrackTintColor="#efefef"
                vertical
                containerStyle={styles.body.content.imageAndSlider.slider}
              />
            </View>
          </View>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DetailPage;
