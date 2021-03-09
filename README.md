
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

query {
  getCourse(id: "6047c53509a5cb03a4d54277") {
    id
    title
  }
}

query {
  getCourses {
    id
    title
  }
}

query {
  getCourses(page: 1, limit: 3) {
    id
    title
  }
}
```