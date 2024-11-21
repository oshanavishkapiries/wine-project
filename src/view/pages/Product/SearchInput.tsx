import {Input} from "@/components/ui/input.tsx";

export const SearchInput = ({searchTerm, setSearchTerm}: any) => (
    <div className="relative w-64 w-full">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
        <Input
            type="search"
            placeholder="Search wines..."
            className="w-full rounded-lg bg-background pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
)