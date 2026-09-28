
const GameCard = ({titulo, preco, imagem}) => {
  return (
    <div className="bg-black m-3.5 rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover: border-[#95ff00]">
      <img src={imagem} alt={titulo} className="w-full h-[300px] object-cover"/>

      <article className="text-center p-4">
        <h2 className="text-xl text-[#95ff00] uppercase mb-3 font-bold">{titulo}</h2>
        <p className="text-white text-2xl font-bold mb-4">{preco}</p>

        <button className="bg-gradient-to-r from-[#95ff00] to-green-800 w-[50%] py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold transition-transform hover: bg-green-800 hover: text-white hover: scale-105">
          Comprar
        </button>

      </article>

    </div>
  )
}

export default GameCard
