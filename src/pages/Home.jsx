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
    <main>
      <h2>PRODUTOS EM DESTAQUE</h2>
  <section>
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
