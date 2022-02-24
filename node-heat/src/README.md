## Node project - Impulse Rocketseat

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