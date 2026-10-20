import ImagemCafe1 from "../assets/cafe1.jpg"
import ImagemCafe2 from "../assets/cafe2.jpg"
import ImagemCafe3 from "../assets/cafe3.jpg"
import ImagemTorta from "../assets/doce1.jpg"

const Home = () => {

  const cafe = [
    { id: 1, titulo: "Café Descafeinado", preco: "R$13", imagem: ImagemCafe1 },
    { id: 2, titulo: "Café Extra Forte", preco: "R$15", imagem: ImagemCafe2 },
    { id: 3, titulo: "Café Americano", preco: "R$12", imagem: ImagemCafe3 },
    { id: 4, titulo: "Torta", preco: "R$16", imagem: ImagemTorta }
  ];


  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">PRODUTOS EM DESTAQUE</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
    {games.map((cafes) => (
      <GameCard
        key={cafes.id}
        titulo={cafes.titulo}
        preco={cafes.preco}
        imagem={cafes.imagem}
      />
    ))}
  </section>
    </main>
  );
}

export default Home
