import React from 'react'
import Card from '../components/Card'
import ImagemCafe1 from "../assets/cafe1.jpg"
import ImagemCafe2 from "../assets/cafe2.jpg"
import ImagemCafe3 from "../assets/cafe3.jpg"
import ImagemTorta from "../assets/doce1.jpg"

const Produtos = () => {

  const produtos = [
    { id: 1, titulo: "Café Descafeinado", preco: "R$13", imagem: ImagemCafe1 },
    { id: 2, titulo: "Café Extra Forte", preco: "R$15", imagem: ImagemCafe2 },
    { id: 3, titulo: "Café Americano", preco: "R$12", imagem: ImagemCafe3 },
    { id: 4, titulo: "Torta", preco: "R$16", imagem: ImagemTorta }
  ];

  return (
    <main className="px-[5%] text-center py-8 grow bg-[#E8D1A7]">
      <h2 className="text-3xl font-bold mb-4 text-[#742D14]">
        Nossos Produtos</h2>
      <p className="text-[#442D1C] mb-8">Aqui você encontrará todos
        os produtos disponíveis na nossa Cafeteria</p>

      <section className="flex flex-wrap justify-center gap-6">
        {produtos.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Produtos