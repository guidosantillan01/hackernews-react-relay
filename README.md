# HackerNews Clone using React and Relay

## Important Links

- [To setup a Prisma Demo Database](https://www.prisma.io/docs/get-started/01-setting-up-prisma-demo-server-JAVASCRIPT-a001/)

## Errors and Problems

- To solve that deprecated `graphcool` tutorial. [Link](https://www.graph.cool/docs/quickstart/frontend/react/relay-sot2faez6a)
- From the youtube video:

```
This tutorial is slightly outdated. The React/Relay part is still accurate, however, when it comes to creating the server with the Graphcool CLI you now have a different workflow. Instead of `graphcool init --schema schema.graphql` you now need to run the folllowing commands:

# 1. Bootstrap file structure for new Graphcool service in new directory called `server`
graphcool init server

# 2. Deploy the service
cd server
graphcool deploy

The data model needs to be adjusted in types.graphql inside the server directory.

---
More info:
1. Graphcool Framework announcement: https://blog.graph.cool/introducing-t...

2. React/Relay Quickstart: https://www.graph.cool/docs/quickstart/frontend/react/relay-sot2faez6a
---

Learn how to get started with React, GraphQL & Relay Modern in this Fullstack Tutorial.

Written Tutorial: https://www.prisma.io/blog/getting-started-with-relay-modern-46f8de6bd6ec

Final Code: https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-relay-modern
```
