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
