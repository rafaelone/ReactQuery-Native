import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {Routes} from './routes';
import {queryClient} from './services/queryClient';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181B23'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#181B23"
        translucent
      />
      <QueryClientProvider client={queryClient}>
        <View style={{flex: 1}}>
          <Routes />
        </View>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
