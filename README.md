## Node project - Impulse Rocketseat

# docs 

- https://efficient-sloth-d85.notion.site/Impulse-240cb588fb8d4089917c7a6cef0008b3

# Setp by step

- Install express, ts-node-dev, typescript, prisma

Ex:
```yarn add express```

```yarn add -D ts-node-dev @types/express typescript```

- Install prisma (prisma.io)

```
yarn add -D prisma 
yarn prisma init

after create schemas runs: 
yarn prisma migrate dev

yarn prisma studio // open sgbd in browser
```

- Install github oauth
- Enter in https://github.coms/ettings/developers > OAuth Apps

note: `to subscribe some type we can create the same sctructure inside our project and override the type adding new fields. Example: @types/express/index.d.ts`

install socket.io

```
yarn add socket.io
yarn add -D @types/socket.io ```

aula 1 OK 

-------------------------

vitejs.dev to install react project

``` yarn create vite web --template react-ts ```

Configure and exclude all unused files

By default we will use css modules from vite.

install ```yarn add sass```

```yarn add react-icons 
```

class 02 37:29

Styling page
fetching data from api
config for github authentication

class 02 1:08:37

install 
```yarn add socket.io-client ```

class 03 
-- buildin an mobile app

- install the tools (xcode and android studio)

to start a new project runs: 

```
npx expo init nlwheatapp
npx expo start
```

Documentation for expo: 

go to docs.expo.dev

install google fonts in guid tab:

```
expo install expo-font @expo-google-fonts/roboto
expo install expo-app-loading
```


to recognize svg as component we need to install an expo react native svg, just search by svg in expo docs and after install svg transform
```
expo install react-native-svg
yarn add --dev react-native-svg-transformer
```

after we have to add metro.config.js, following the docs from svg transform react native: https://github.com/kristerkari/react-native-svg-transformer


install react native x helper to spacing top space in iphone for example

````
yarn add react-native-iphone-x-helper
````


install lineargradient from expo 
````
expo install expo-linear-gradient
````

class 03 1:12:45

install moti to animations
````
yarn add moti
expo install react-native-reanimated
````

after installation include a new plugin at babel.config (https://docs.expo.dev/versions/v44.0.0/sdk/reanimated/)


to authentication we have to use AuthSession from expo

```
expo install expo-auth-session expo-random
```

add new auth project at github adding from expo. (https://docs.expo.dev/versions/v44.0.0/sdk/auth-session/)

add new scheme in package.json.

class 03 2:03:35

to configure axios get your IP.

````
ifconfig
```  

install asyncstore from expo
````
expo install @react-native-async-storage/async-storage
````

class 03 2:36:38

install socket-io
````
yarn add socket.io-client
````

Top class!! 
