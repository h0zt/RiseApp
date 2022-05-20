import React, {useState} from 'react';
import { View ,Text, StyleSheet} from 'react-native';

const App =() =>{
 
  return(
    <View style={styles.container}>
      <Text>@backyard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
  },
});

export default App;
