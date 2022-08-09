# Pigeon

### SQL => Email

I've frequently run into the issue of wanting to email a subset of users out of a database. Usually I just run a query, and write a script to look though and send the notification. But I figured I could build a better solution!

Right now there's no DB attached. Data connections/keys are stored in local storage, and sent along with queries. Will work on user permanence later.

## Getting started:

This is a Node/React/Postgres monorepo wrangled with [Lerna](https://github.com/lerna/lerna).

```
git clone https://github.com/tylermaran/pigeon.git

lerna bootstrap

npm start
```

## TODO

-   [ ] Add a database / user permanence
-   [ ] Probably use this for the code highlighting: https://www.npmjs.com/package/react-syntax-highlighter
-   [ ] Build out generic Datasouce (i.e. custom GET request)
-   [ ] Build out generic provider (i.e. custom POST request)
-   [ ] Add post send webhook (ex: log notification history back to db)
-   [ ] Add optional JS pre-steps (i.e. format data between SQL query and send)
-   [ ] MySQL support
-   [ ] Schedule send
-   [ ] Email history
-   [ ] Accept incoming webhooks (i.e. delivery receipts)
