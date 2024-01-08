import { redirect } from 'next/navigation';

export default function HomePage() {

  redirect('/dashboard/counter');

  //Cuando se hace el redirect el contenido de abajo  no se ejecuta
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  )
}
