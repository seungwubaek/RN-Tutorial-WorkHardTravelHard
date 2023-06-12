import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Fontisto, Feather, FontAwesome } from '@expo/vector-icons';

import STORAGE_KEY from '~/constants/storage';

import {
  StyledTextInput,
  StyledScrollView,
  StyledViewToDoItem,
  StyledTouchableOpacityToDoBtnIcon,
  StyledViewToDoBtnGroup,
  StyledTextInputEditToDo,
  StyledViewEditToDoWrapper,
  StyledTouchableOpacityEditToDoCancelIcon,
  StyledTouchableOpacityToDoWithFinishIcon,
  StyledTextToDoFinishIcon,
} from './AppBody.style';

const AppBody = (props) => {
  const { working } = props.data;
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});
  const theme = useTheme();

  useEffect(() => {
    loadToDos();
  }, []);

  const addTodo = useCallback(async () => {
    if (text === '') return;
    // saving logic
    const newToDos = {
      ...toDos,
      [Date.now()]: {
        text,
        work: working,
        finished: false,
        editing: false,
      },
    };
    setToDos(newToDos);
    await storeToDos(newToDos);
    setText('');
  }, [text, toDos, working]);

  const storeToDos = async (toDos) => {
    await AsyncStorage.setItem(STORAGE_KEY.toDos, JSON.stringify(toDos));
  };

  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY.toDos)
    if (!s) return;
    try {
      setToDos(JSON.parse(s) || {});
    } catch (e) {
      console.log(e);
    }
  };

  const toggleToDoFinished = async (toDoId) => {
    const newToDos = {
      ...toDos,
      [toDoId]: {
        ...toDos[toDoId],
        finished: !toDos[toDoId].finished,
      },
    };
    setToDos(newToDos);
    await storeToDos(newToDos);
  }

  const startEditToDo = async (toDoId) => {
    const newToDos = {
      ...toDos,
      [toDoId]: {
        ...toDos[toDoId],
        editing: true,
        editText: toDos[toDoId].text,
      },
    };
    setToDos(newToDos);
  };

  const changeEditTextToDo = (toDoId, editText) => {
    const newToDos = {
      ...toDos,
      [toDoId]: {
        ...toDos[toDoId],
        editText,
      },
    };
    setToDos(newToDos);
  };

  const saveEditToDo = async (toDoId) => {
    const newToDos = {
      ...toDos,
      [toDoId]: {
        ...toDos[toDoId],
        text: toDos[toDoId].editText,
        editing: false,
      },
    };
    setToDos(newToDos);
    await storeToDos(newToDos);
  };

  const cancelEditToDo = (toDoId) => {
    const newToDos = {
      ...toDos,
      [toDoId]: {
        ...toDos[toDoId],
        editing: false,
      },
    };
    setToDos(newToDos);
  };

  const deleteToDo = async (toDoId) => {
    Alert.alert('Delete To Do?', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const newToDos = {...toDos};
          delete newToDos[toDoId];
          setToDos(newToDos);
          await storeToDos(newToDos);
        },
      },
    ]);
    return
  };

  return (
    <>
    <StyledTextInput
      placeholder={working ? 'Add a To Do' : 'Where do you want to go?'}
      returnKeyType='done'
      onChangeText={(payload) => setText(payload)}
      value={text}
      onSubmitEditing={addTodo}
    />
    <StyledScrollView>
    {
      Object.keys(toDos).map((key) => {
        const toDo = toDos[key];
        return (
          toDo.work === working ? (
            <StyledViewToDoItem
              key={key}
              editing={toDo.editing}
            >
              {
                toDo.editing ? (
                  <StyledViewEditToDoWrapper>
                    <StyledTextInputEditToDo
                      value={toDo.editText}
                      onChangeText={(payload) => changeEditTextToDo(key, payload)}
                      onSubmitEditing={() => saveEditToDo(key)}
                    ></StyledTextInputEditToDo>
                    <StyledTouchableOpacityEditToDoCancelIcon
                      hitSlop={1.5}
                      onPress={() => cancelEditToDo(key)}
                    >
                      <FontAwesome name="close" size={15} color={theme.colors.gray} />
                    </StyledTouchableOpacityEditToDoCancelIcon>
                  </StyledViewEditToDoWrapper>
                ) : (
                <StyledTouchableOpacityToDoWithFinishIcon
                  onPress={() => toggleToDoFinished(key)}
                >
                  {
                    toDo.finished ? (
                      <Fontisto name="check" size={12} color={theme.colors.success} />
                    ) : (
                      <Fontisto name="check" size={10} color={theme.colors.gray} />
                    )
                  }
                  <StyledTextToDoFinishIcon
                    finished={toDo.finished}
                  >
                    {toDo.text}
                  </StyledTextToDoFinishIcon>
                </StyledTouchableOpacityToDoWithFinishIcon>
                )
              }
              <StyledViewToDoBtnGroup>
                { toDo.editing ? null : (
                  <StyledTouchableOpacityToDoBtnIcon
                    onPress={() => startEditToDo(key)}
                  >
                    <Feather name="edit" size={15} color={theme.colors.gray} />
                  </StyledTouchableOpacityToDoBtnIcon>
                )}
                <StyledTouchableOpacityToDoBtnIcon
                  onPress={() => deleteToDo(key)}
                >
                  <Fontisto name="trash" size={15} color={theme.colors.gray} />
                </StyledTouchableOpacityToDoBtnIcon>
              </StyledViewToDoBtnGroup>
            </StyledViewToDoItem>
          ) : null
        );
      })
    }
    </StyledScrollView>
    </>
  )
}

export default AppBody;
