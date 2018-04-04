import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import { FormattedWrapper } from 'react-native-globalize';

import messages from './Messages';
import store from './store';

import Navigator from './Navigator';
import { colors } from './utils/constants';

const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PINK_50};
`;

const StatusBarAndroid = styled.View`
  height: 24;
  background-color: ${props => props.theme.PINK_200};
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={colors}>
				  <FormattedWrapper locale='en' messages={messages}>
            <Root>
              <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
              { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
            <Navigator />
          </Root>
					</FormattedWrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
