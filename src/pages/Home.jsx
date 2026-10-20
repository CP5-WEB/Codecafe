
import Card from "../components/Card";

import ImagemCafe1 from "../assets/cafe1.jpg";
import ImagemCafe2 from "../assets/cafe2.jpg";

import ImagemTorta from "../assets/doce1.jpg";

const Home = () => {
  const cafe = [
    {
      id: 1,
      titulo: "Café Descafeinado",
      preco: "R$ 13,00",
      imagem: ImagemCafe1,
    },
    {
      id: 2,
      titulo: "Café Extra Forte",
      preco: "R$ 15,00",
      imagem: ImagemCafe2,
    },
    {
      id: 4,
      titulo: "Torta",
      preco: "R$ 16,00",
      imagem: ImagemTorta,
    },
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl mb-6 text-[#E8D1A7]">
        PRODUTOS EM DESTAQUE
      </h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-items-center">
        {cafe.map((cafes) => (
          <Card
            key={cafes.id}
            titulo={cafes.titulo}
            preco={cafes.preco}
            imagem={cafes.imagem}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;