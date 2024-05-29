let users = []
let id = 1

const sql = require("./sql.controller")

module.exports = {
    getUsers: async ()=> {
        return users
    },
    addUser: async (user)=>{
        user.id = id++
        users.push(user)
    },
    deleteUser: async (idUser)=> {
        const userIndex = user.findIndex(item => item.id == idUser)
        if (userIndex !== -1){
            user = user.filter(item => item.id!=id)
            return true
        }
        return false
    },
    update: async (user)=> {
        const userIndex = user.findIndex(item => item.id == user.id)
        if (userIndex !== -1){
            users[userIndex] = user
            return users[userIndex]
        }
            return null
    }
}