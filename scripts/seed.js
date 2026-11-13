const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
 
const pasta = path.join(__dirname, '..', 'data');
fs.mkdirSync(pasta, { recursive: true });
 
const db = new Database(path.join(pasta, 'turismo.db'));
 
db.exec(`
  DROP TABLE IF EXISTS pontos;
  CREATE TABLE pontos (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    nome      TEXT NOT NULL,
    categoria TEXT NOT NULL,
    bairro    TEXT NOT NULL,
    ano       INTEGER,
    descricao TEXT NOT NULL
  );
`);
 
const pontos = [
  ['Mercado Público', 'Gastronomia', 'Centro Histórico', 1869,
    'Prédio histórico com bancas de alimentos, ervas, artigos regionais e restaurantes.'],
  ['Usina do Gasômetro', 'Cultura', 'Centro Histórico', 1928,
    'Antiga usina termelétrica às margens do Guaíba, hoje centro cultural.'],
  ['Theatro São Pedro', 'Cultura', 'Centro Histórico', 1858,
    'Um dos teatros mais antigos do país, em frente à Praça da Matriz.'],
  ['Casa de Cultura Mario Quintana', 'Cultura', 'Centro Histórico', 1990,
    'Antigo Hotel Majestic, onde morou o poeta Mario Quintana; hoje centro cultural.'],
  ['MARGS', 'Museu', 'Centro Histórico', 1954,
    'Museu de Arte do Rio Grande do Sul, localizado na Praça da Alfândega.'],
  ['Fundação Iberê Camargo', 'Museu', 'Cristal', 2008,
    'Museu dedicado à obra de Iberê Camargo, em prédio projetado por Álvaro Siza.'],
  ['Parque Farroupilha (Redenção)', 'Parque', 'Farroupilha', 1935,
    'Parque mais tradicional da cidade, com lago e o Brique da Redenção aos domingos.'],
  ['Parque Moinhos de Vento (Parcão)', 'Parque', 'Moinhos de Vento', 1972,
    'Parque arborizado com lago, pistas de caminhada e um moinho de vento decorativo.'],
  ['Jardim Botânico', 'Parque', 'Jardim Botânico', 1958,
    'Área verde com coleções de plantas nativas, lagos e trilhas.'],
  ['Orla do Guaíba', 'Parque', 'Centro Histórico', 2018,
    'Calçadão à beira do Guaíba, com ciclovia, quadras esportivas e bares.'],
];
 
const inserir = db.prepare(
  'INSERT INTO pontos (nome, categoria, bairro, ano, descricao) VALUES (?, ?, ?, ?, ?)'
);
 
for (const ponto of pontos) {
  inserir.run(...ponto);
}
 
console.log(`${pontos.length} pontos turísticos inseridos!`);
db.close();