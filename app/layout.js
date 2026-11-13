import Link from 'next/link';
import './globals.css';
 
export const metadata = {title: 'POA Turismo',
  description: 'Pontos turísticos de Porto Alegre',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="topo">
          <Link href="/" className="logo">POA Turismo</Link>
          <nav>
            <Link href="/">Início</Link>
            <Link href="/pontos">Pontos turísticos</Link>
          </nav>
        </header>
        <main className="conteudo">{children}</main>
      </body>
    </html>
  );
}