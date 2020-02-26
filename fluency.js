async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json()
    return json
}
console.log(getUsers())

async function companyInfo() {
    const data = await getUsers();
    return data.map(users => {
        return `${users.company.name}, ${users.website}`
    })
}
console.log(companyInfo())


async function getTodosJSON() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const json = await response.json()
    return json
}
console.log(getTodosJSON())

async function incompleteTasks() {
    const data = await getTodosJSON();
    return data.filter(todos => !todos.completed)
}
console.log(incompleteTasks())


async function getAllPostsJSON() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const json = await response.json()
    return json
}
console.log(getAllPostsJSON())

async function hasWord(string) {
    const data = await getAllPostsJSON();
    return data.filter(posts => posts.body.includes(string))
}
console.log(hasWord("qui"))

async function longestTitle() {
    const data = getAllPostsJSON();
    const postTitles = await data.map(posts => posts.title)
    return postTitles.reduce((a, b) => a.length > b.length ? a : b)
}

async function emails() {
    const data = getUsers();
    return data.map(users => users.email);
}

async function userIdTasks(userID) {
    const data = await getTodosJSON()
    return data.filter(users => users.userId === userID)
}
console.log(userIdTasks(2))
