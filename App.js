import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppBody from '@components/organisms/AppBody';

import defaultTheme, { darkTheme } from '@styles/theme';

import MENU from '~/constants/menu';
import STORAGE_KEY from '~/constants/storage';

import {
  StyledViewContainer,
  StyledViewHeader,
  StyledTouchableOpacity,
  StyledTextScreenNav,
} from './App.style';

export default function App() {
  const [isDarkMode,] = useState(false);
  const [working, setWorking] = useState(true);

  const travel = () => {
    setWorking(false);
    AsyncStorage.setItem(STORAGE_KEY.selectedMenu, MENU.TRAVEL);
  }
  const work = () => {
    setWorking(true);
    AsyncStorage.setItem(STORAGE_KEY.selectedMenu, MENU.WORK);
  }

  useEffect(() => {
    const loadMenu = async () => {
      const selectedMenu = await AsyncStorage.getItem(STORAGE_KEY.selectedMenu);
      if (!selectedMenu || selectedMenu === MENU.WORK) {
        work();
      } else {
        travel();
      }
    }
    loadMenu();
  }, []);

  const data = {
    working,
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <StyledViewContainer>
        <StatusBar style="auto" />
        <StyledViewHeader>
          <StyledTouchableOpacity
            onPress={() => work()}
          >
            <StyledTextScreenNav
              navName="Work"
              working={working}
            >
              Work
            </StyledTextScreenNav>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            onPress={() => travel()}
          >
            <StyledTextScreenNav
              navName="Travel"
              working={working}
            >
              Travel
            </StyledTextScreenNav>
          </StyledTouchableOpacity>
        </StyledViewHeader>
        <AppBody data={data} />
      </StyledViewContainer>
    </ThemeProvider>
  );
}
