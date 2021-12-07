# React Native with Typescript

RN에서 typescript를 이용하여 프로젝트를 개발해 보자.

배운 내용에 대한 것들은 많이 생략한다.

- [설치 및 할일 만들기](https://ajdkfl6445.gitbook.io/study/mobile/react-native/install)
- [내비게이션, Hooks](https://ajdkfl6445.gitbook.io/study/mobile/react-native/hooks)
- [다이어리 앱 만들기](https://github.com/JungKyuHyun/React-Native-Study-Diary-App)

## Getting Start

타입스크립트를 많이 사용해봤다는 가정하에 기본적인 문법은 생략하고, 적용 위주로 봐본다.

```bash
$ npx react-native ReactNativeWithTypescript init --template react-native-template-typescript
```

## useReducer

`Counter.tsx` 참고

## context api

`AuthContext.tsx` 참고

## 네비게이션 사용하기

이 부분이 처음엔 복잡하니 `MainTab`, `RootStack` 쪽 코드를 참고하자.

```bash
$ yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack @react-navigation/bottom-tabs
```
