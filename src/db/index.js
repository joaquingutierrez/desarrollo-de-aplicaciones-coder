import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("places.db")

export const init = () => {
    const promise = new Promise((resolve,reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image NOT NULL, adress NOT NULL, coords TEXT NOT NULL)",
                [],
                () => {
                    resolve()
                },
                (err) => {
                    reject(err)
                }
                )
        })
    })
    
    return promise
}
