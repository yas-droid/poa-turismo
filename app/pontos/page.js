import Link from 'next/link';
import { connection } from 'next/server';
import { listarPontos, listarCategorias } from '@/lib/db';
 
export default async function ListaPontos({ searchParams }) {
  await connection();
  const { q = '', categoria = '' } = await searchParams;
  const pontos = listarPontos(q, categoria);  const categorias = listarCategorias();
 
  return (
    <section>
      <h1>Pontos turísticos</h1>
 
      <form className="filtros">
        <input name="q" placeholder="Buscar pelo nome..." defaultValue={q} />
        <select name="categoria" defaultValue={categoria}>
          <option value="">Todas as categorias</option>
          {categorias.map((c) => (
            <option key={c.categoria} value={c.categoria}>{c.categoria}</option>
          ))}
        </select>
        <button type="submit">Filtrar</button>
      </form>
 
      {pontos.length === 0 && <p>Nenhum ponto turístico encontrado.</p>}
 
      <ul className="grade">
        {pontos.map((ponto) => (
          <li key={ponto.id}>
            <Link href={`/pontos/${ponto.id}`} className="card">
              <h2>{ponto.nome}</h2>
              <p>{ponto.bairro}</p>
              <span className="etiqueta">{ponto.categoria}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}