import {Button} from "@/components/ui/button.tsx";
import {SearchInput} from "@/view/pages/Product/SearchInput.tsx";
import {Tabs} from "@/view/pages/Product/Tabs.tsx";

export const Header = ({activeTab, setActiveTab, searchTerm, setSearchTerm}: any) => (
    <>
        <div className="w-full py-4 justify-between px-6 h-12 flex items-center gap-4">
            <h1 className="text-2xl font-bold">Products</h1>
        </div>
        <header className="shadow-sm py-4 px-6 flex items-center justify-between">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="flex items-center gap-4">
                <Button>Add Product</Button>
                <Button>Manage Categories</Button>
            </div>
        </header>
        <div className="w-full py-4 justify-between px-6 h-12 flex items-center gap-4">
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
    </>
)