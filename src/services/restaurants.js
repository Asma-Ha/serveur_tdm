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

async function getRecipes(id) {
    try {
        const rows = await db.query(
            "SELECT * FROM menu WHERE id_res = ?",
            [id]
          );

        console.log("\n\n", rows)
        return rows
    }
    catch(e) {
        console.log(e.message)
    }

        
}

module.exports = {
    getAll,
    getRecipes
}

