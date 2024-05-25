let users = []
let id = 1

module.exports = {
    getUsers: ()=>users,
    addUser: (user)=>{
        user.id = id++
        users.push(user)
    },
    deleteUser: (data)=>{
        users = users.filter(item => item.id != data.id)
    },
    update: (id, user)=>{
        users[users.findIndex(item=>item.id==id)] = user
    }
}