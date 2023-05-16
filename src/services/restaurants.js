const db = require('./db');

async function getAll() {
        try {
            const rows = await db.query(
                "SELECT * FROM restaurant" 
            )

            console.log("\n\n", rows)
            return rows
        }
        catch(e) {
            console.log(e.message)
        }

        
    }

module.exports = {
    getAll
}

