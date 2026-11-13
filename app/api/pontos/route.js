import { listarPontos } from '@/lib/db';
 
export async function GET(request) {

  const busca = request.nextUrl.searchParams.get('q') ?? '';
  console.log(busca)
  const pontos = listarPontos(busca);
  return Response.json(pontos);
}