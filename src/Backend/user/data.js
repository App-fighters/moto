import bcrypt from 'bcrypt'
const data = {
    users = [
        {
            name : "Amine",
            email : "admin@exemple.com",
            password : bcrypt.hashSync('1234', 8), 
            isAdmin : true ,
        },
        {
            name : "khalil",
            email : "user@exemple.com",
            password : bcrypt.hashSync('1234', 8), 
            isAdmin : false,
        }
    ],
}

export default data 