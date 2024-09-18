import Container from "@/components/container";
import Search from "@/components/search";
import Gallery from "@/components/gallery";
import { GameProps } from "@/utils/types/game";
import { BsArrowRightSquare } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// buscando jogo separado exclusivo
async function getDalyGame(){
    try{
        const resp = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: {revalidate: 320} });
        return await resp.json();

    }catch(error){
        throw new Error("Failed do tech data");
    }
}

// buscando galeria de games
async function getGamesGallery(){
    try{
        const resp = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: {revalidate: 320} });
        return await resp.json();
    }catch(error){
        throw new Error("Failed do tech data gallery");
    }
}

export default async function Home() {

  const dalyData: Promise<GameProps> = getDalyGame();
  const galleryData:Promise<GameProps[]> = getGamesGallery();


  const [daly, gallery] = await Promise.all([dalyData, galleryData]);

  return (
    <main className="w-full">
        <Container>
            <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo pra você</h1>
            <Link href={`/game/${daly.id}`}>
                <section className="w-full bg-black rounded-lg">
                    <div className="w-full max-h-96 h-96 relative">
                        <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                            <p className="font-bold text-xl text-white">{daly.title}</p>
                            <BsArrowRightSquare  size={24} color="#ffffff"/>
                        </div>
                        <Image
                            src={daly.image_url}
                            alt={daly.title}
                            priority={true}
                            quality={100}
                            fill={true}
                            className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"

                        />
                    </div>
                </section>
            </Link>
            <div className="my-4">
                <Search />
            </div>

            <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
            <Gallery games={gallery}/>

        </Container>
    </main>
  );
}
