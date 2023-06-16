import low  from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { DatabaseSchema } from './DatabaseSchema'

const adapter = new FileSync<DatabaseSchema>('./data/db.json')
const db = low(adapter)
export default db