const Card = ({ titulo, preco, imagem }) => {
  return (
    <div className="bg-[#442D1C] rounded-2xl overflow-hidden border-4 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[#8B692B]">
      <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover" />

      <article className="p-4 text-center">
        <h2 className="text-2xl text-[#E8D1A7] mb-2 font-bold">{titulo}</h2>
        <p className="text-[#8B692B] text-2xl font-bold mb-4">{preco}</p>

        <button className="bg-[#742D14] w-[50%] py-3 px-4 text-[#E8D1A7] rounded-2xl cursor-pointer transition hover:bg-[#8B692B] hover:scale-105">
          Comprar
        </button>
      </article>
    </div>
  )
}

export default Card