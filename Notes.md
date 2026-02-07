# React Native Tutorial: Hitesh Choudhary Youtube

## Rewrite React Native App

```ts
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello World 💕</Text>
    </View>
  );
};

export default App;
```

## Styling React Native Components: The Fundamentals of Stylesheet

```ts
import React, { JSX } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode === 'dark' ? 'black' : 'white' },
      ]}
    >
      <Text
        style={{
          color: isDarkMode === 'dark' ? 'white' : 'black',
        }}
      >
        Hello World 💞
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

# React Native Project 2

```ts
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: 'white' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{ color: 'white' }}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{ color: 'white' }}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    height: 100,
    borderRadius: 5,
    margin: 2,
    padding: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});

export default FlatCards;
```

```ts
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 2,
    flexDirection: 'row',
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#FFA29F',
    // elevation: 20,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'green',
    shadowRadius: 10,
  },
});

export default ElevatedCards;
```

```ts
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, India - 250 Km away</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    padding: 5,
    margin: 5,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
  },
  cardImage: {
    height: 200,
    borderRadius: 5,
  },
  cardBody: {
    paddingHorizontal: 5,
    marginVertical: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: 'green',
  },
  cardDescription: {
    color: 'gray',
    textAlign: 'justify',
  },
});

export default FancyCard;
```

```ts
import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JavaScript ES6?</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/662e5f9f46ce2d2450186839_662b08cfab87818173b64466-ce8f6f9a59aad8a2ef2a04f3fb1d4f37.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            🎯 Explore the latest features in JavaScript ECMAScript 2023 (ES14)
            and how they enhance coding efficiency and capabilities. Learn about
            new tools like top-level await, RegExp improvements, and more.
            JavaScript's latest update, ECMAScript 2023 (ES14), released in June
            2023, brings several exciting features to enhance coding efficiency
            and capabilities.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://daily.dev/blog/javascript-latest-version-whats-new',
              )
            }
          >
            <Text style={styles.socialLinks}>Read more...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://daily.dev/blog/javascript-latest-version-whats-new',
              )
            }
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
  },
  card: {
    height: 300,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  headingContainer: { padding: 3 },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardImage: {
    height: 200,
    borderRadius: 5,
  },
  bodyContainer: {
    paddingVertical: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  socialLinks: {
    textDecorationLine: 'underline',
    color: 'green',
    fontSize: 16,
  },
});

export default ActionCard;
```

```ts
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <Image
              style={styles.avatar}
              source={{ uri: `${contact.imageUrl}` }}
            />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
  },
  container: {
    paddingHorizontal: 5,
  },
  userCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 4,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userName: { fontWeight: 'bold' },
});

export default ContactList;
```

## Project 3

```ts
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }

    if (lowerCase) {
      characterList += lowerCaseChars;
    }

    if (numbers) {
      characterList += digitChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Should be min of 4 characters')
      .max(16, 'Should be max of 16 characters')
      .required('Length is required'),
  });

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>
      </View>
      <Formik
        initialValues={{ passwordLength: '' }}
        validationSchema={passwordSchema}
        onSubmit={values => {
          console.log(values);
          generatePassword(+values.passwordLength);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <View style={styles.inputWrapper}>
              <View style={styles.inputColumn}>
                <Text style={styles.inputText}>Password Length: </Text>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder="Ex.8"
                  keyboardType="numeric"
                />
                {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include LowerCase</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include UpperCase</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Numbers</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Symbols</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
              />
            </View>

            <View style={styles.formActions}>
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.primaryBtn}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleReset();
                  resetPassword();
                }}
              >
                <Text style={styles.secondaryBtn}>Reset</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      {isPasswordGenerated && (
        <View style={[styles.card, styles.cardElevated]}>
          <Text selectable={true} style={styles.subTitle}>
            {password}
          </Text>
          <Text style={styles.description}>Long press to copy..</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 5,
  },
  formContainer: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  heading: {
    fontWeight: '500',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputColumn: {
    width: '100%',
  },
  inputText: {
    fontSize: 20,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    width: '50%',
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  primaryBtn: {
    height: 50,
    width: 100,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  secondaryBtn: {
    height: 50,
    width: 100,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
  card: {
    width: '80%',
    height: 50,
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 'auto',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardElevated: {
    elevation: 2,
    backgroundColor: '#fffdd0',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
});

export default App;
```

# Project 4

```ts
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }

    if (lowerCase) {
      characterList += lowerCaseChars;
    }

    if (numbers) {
      characterList += digitChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Should be min of 4 characters')
      .max(16, 'Should be max of 16 characters')
      .required('Length is required'),
  });

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>
      </View>
      <Formik
        initialValues={{ passwordLength: '' }}
        validationSchema={passwordSchema}
        onSubmit={values => {
          console.log(values);
          generatePassword(+values.passwordLength);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <View style={styles.inputWrapper}>
              <View style={styles.inputColumn}>
                <Text style={styles.inputText}>Password Length: </Text>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder="Ex.8"
                  keyboardType="numeric"
                />
                {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include LowerCase</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include UpperCase</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Numbers</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Symbols</Text>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
              />
            </View>

            <View style={styles.formActions}>
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.primaryBtn}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleReset();
                  resetPassword();
                }}
              >
                <Text style={styles.secondaryBtn}>Reset</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      {isPasswordGenerated && (
        <View style={[styles.card, styles.cardElevated]}>
          <Text selectable={true} style={styles.subTitle}>
            {password}
          </Text>
          <Text style={styles.description}>Long press to copy..</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 5,
  },
  formContainer: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  heading: {
    fontWeight: '500',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputColumn: {
    width: '100%',
  },
  inputText: {
    fontSize: 20,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    width: '50%',
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  primaryBtn: {
    height: 50,
    width: 100,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  secondaryBtn: {
    height: 50,
    width: 100,
    borderRadius: 5,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
  card: {
    width: '80%',
    height: 50,
    marginVertical: 20,
    borderRadius: 10,
    marginHorizontal: 'auto',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardElevated: {
    elevation: 2,
    backgroundColor: '#fffdd0',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
});

export default App;
```
