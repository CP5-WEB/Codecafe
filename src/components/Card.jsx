const Card = ({ titulo, preco, imagem }) => {
  return (
    <div className="w-72 bg-[#442D1C] rounded-2xl overflow-hidden border-4 border-transparent shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#8B692B]">

      <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover" />

      <article className="p-5 text-center">
        <h2 className="font-serif text-2xl text-[#E8D1A7] font-bold mb-1">
          {titulo}
        </h2>

        <div className="w-10 h-1 bg-[#8B692B] rounded-full mx-auto mb-3"></div>

        <p className="text-[#E8D1A7] text-2xl font-bold mb-4">{preco}</p>

        <button className="bg-[#742D14] w-[60%] py-3 px-4 text-[#E8D1A7] font-semibold rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#8B692B] hover:scale-105">
          Comprar
        </button>
      </article>

    </div>
  )
}

export default Card