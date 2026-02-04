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
