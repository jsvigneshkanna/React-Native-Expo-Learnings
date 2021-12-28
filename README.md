# React-Native-Expo-Learnings

Learing React-Native app development using Expo Technology from different resources. Come lets all learn together 😸

## Requirements

1. Expo CLI (create, modify, deploy react-native apps through cmd line)
2. Expo Go in mobile (visulize the developed app in mobile device with simulator/ emulator)
3. Nodejs

---

## Quickstart

```
$ npm install --global expo-cli (Installs cli in system globally)

$ expo init my-project (Creating a project)

$ expo start (Starts the app and opens qrcode to scan in mobiles)

$ expo install expo-image-picker (To add native feature to pick images from gallery)

$ expo install expo-sharing (To able to share the images by various modes - bluetooth, wathsapp etc)
```

## Weather App Example-1

## [Figma link](https://www.figma.com/file/SMVLK9OmDgo7pWsQBEL5Ug/Weather-app-ReactNative?node-id=0%3A1)

## Problems encountered

### 1. App folder not able to upload in git repo

    Expo folder creates a repo inside app-folder. we need to delete the .git folder from app-folder. This .git folder is usually hidden one

**Ref**: [stackoverflow answer](https://stackoverflow.com/questions/64863926/i-cant-upload-react-native-expo-projects-on-github)

---

## Reference

1. [Expo official docs](https://docs.expo.dev/)
2. [YT 2 hrs crash course 🌟](https://www.youtube.com/watch?v=NgDaPmxewcg&t=407s)
