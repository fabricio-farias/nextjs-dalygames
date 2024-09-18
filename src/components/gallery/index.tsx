import {GameProps} from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import {BiRightArrowCircle} from "react-icons/bi";

type GalleryProps = {
    games: GameProps[];
}

export default function Gallery({ games }: GalleryProps) {
    return (
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.map((item)=> (
                <Link
                    key={item.id}
                    href={`/game/${item.id}`}>
                    <div className="w-full bg-slate-200 rounded-lg p-4 mb-5">
                        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                            <Image
                                className="rounded-lg object-cover"
                                src={item.image_url}
                                alt={item.title}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                fill={true}
                                quality={100}
                            />
                        </div>
                        <div className="flex items-center mt-4 justify-between">
                            <p className="text-sm font-bold px-2 text-black truncate">{item.title}</p>
                            <BiRightArrowCircle size={24} color="#000000" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
