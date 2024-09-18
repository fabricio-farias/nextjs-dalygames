"use client"
import {ChangeEvent, FormEvent, useState} from "react";
import {FiSearch} from "react-icons/fi";
import { useRouter } from "next/navigation";


export default function Search() {

    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(search === "") return;

        router.push(`/game/search/${search}`);

    }

    return (
        <form
            onSubmit={handleSearch}
            className="w-full bg-slate-200 rounded-lg my-5 flex gap-2 items-center justify-between p-2"
        >
            <input
                className="bg-slate-200 outline-none w-11/12"
                type="text"
                placeholder="Procurando algum jogo?"
                onChange={(event: ChangeEvent<HTMLInputElement>)=> setSearch(event.target.value)}
            />
            <button type="submit">
                <FiSearch size={24} color="#ea580c"/>
            </button>
        </form>
    )
}
