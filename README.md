# Pigeon

### SQL => Email

I've frequently run into the issue of wanting to email a subset of users out of a database. Usually I just run a query, and write a script to look though and send the notification. But I figured I could build a better solution!

## Getting started:

This is a Node/React/Postgres monorepo wrangled with [Lerna](https://github.com/lerna/lerna).

```
git clone https://github.com/tylermaran/pigeon.git

lerna bootstrap

npm start
```

## TODO

-   [ ] Probably use this for the code highlighting: https://www.npmjs.com/package/react-syntax-highlighter
-   [ ] Build out generic Datasouce (i.e. custom GET request)
-   [ ] Build out generic providder (i.e. custom POST request)
-   [ ] Add post send webhook
-   [] Add optional JS pre-steps (i.e. format data between SQL query and send)
-   [] MySQL support
