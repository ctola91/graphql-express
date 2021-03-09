
```graphql
mutation {
  signUp(input: {email: "Christian", password: "admin123"}) {
    email
    password
    token
  }
}

query {
  getUser(id: "6047c3d109a5cb03a4d5426e") {
    id
    email
  }
}

query {
  getUsers {
    id
    email
  }
}

mutation {
  addCourse(input: {title: "hola mundo", views: 5}, user: "6047c3d109a5cb03a4d5426e") {
    id
    title
    views
  }
}
```