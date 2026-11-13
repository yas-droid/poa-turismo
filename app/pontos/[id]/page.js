import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buscarPonto } from '@/lib/db';
 
export default async function DetalhePonto({ params }) {
  const { id } = await params;
  const ponto = buscarPonto(id);
 
  if (!ponto) {
    notFound();
  }
 
  return (
    <article className="detalhe">
      <Link href="/pontos">← Voltar para a lista</Link>
      <h1>{ponto.nome}</h1>
      <span className="etiqueta">{ponto.categoria}</span>
      <p>{ponto.descricao}</p>
      <dl>
        <dt>Bairro</dt>
        <dd>{ponto.bairro}</dd>
        <dt>Ano de inauguração</dt>
        <dd>{ponto.ano}</dd>
      </dl>
    </article>
  );
}