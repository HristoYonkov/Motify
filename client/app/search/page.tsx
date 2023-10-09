import getSongsByTitle from "@/actions/getSongsByTitle"

interface SearchProps {
    searchParams: {
        title: string
    }
}

const Search = async ({searchParams}: SearchProps) => {
    const songs = getSongsByTitle(searchParams.title);

    return (
        <div className="
            bg-neutral-900
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            Search!
        </div>
    )
}

export default Search;