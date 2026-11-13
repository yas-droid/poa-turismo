import Link from 'next/link';
 
export default function Home() {
  return (
    <section>
      <h1>Bem-vindo ao POA Turismo</h1>
      <p>Conheça os principais pontos turísticos de Porto Alegre.</p>
      <p><Link href="/pontos">Ver a lista de pontos turísticos →</Link></p>
    </section>
  );
}