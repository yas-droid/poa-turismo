import 'server-only';
import Database from 'better-sqlite3';
import path from 'path';
 
const db = new Database(path.join(process.cwd(), 'data', 'turismo.db'));
 
export function listarPontos(busca = '', categoria = '') {
  let sql = 'SELECT id, nome, categoria, bairro FROM pontos WHERE nome LIKE ?';
  const valores = [`%${busca}%`];
 
  if (categoria) {
    sql += ' AND categoria = ?';
    valores.push(categoria);
  }
 
  sql += ' ORDER BY nome';
  return db.prepare(sql).all(...valores);
}
 
export function listarCategorias() {
  return db.prepare('SELECT DISTINCT categoria FROM pontos ORDER BY categoria').all();
}
 
export function buscarPonto(id) {
  return db.prepare('SELECT * FROM pontos WHERE id = ?').get(id);
}