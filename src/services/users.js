const db = require('./db');

async function addUser(info) {
    try {
        const { username, email, phone, password, address } = info;

        await db.query(
            "INSERT INTO utilisateur (username, email, phone, state, password, address) VALUES (?, ?, ?, 1, ?, ?)",
            [username, email, phone, password, address]
        );
    } catch (e) {
        console.log(e.message);
        throw e; 
    }
}

async function login(info) {
    try {
        const { username, password } = info

        const row = await db.query(
            "SELECT * from utilisateur where username = ? and password = ?",
            [username, password]
        );

        if (row == null) {
            throw Error("Invalid credentials");
        } else {
            // Update the user's state to 1
            await db.query(
                "UPDATE utilisateur SET state = 1 WHERE username = ?",
                [username]
            );

            return row;
        }
    } catch (e) {
        throw e;
    }
}




module.exports = {
    addUser, 
    login
}

