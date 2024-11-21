import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu.tsx";

export const Tabs = ({ activeTab, setActiveTab }:any) => (
    <div className="flex items-center gap-4">
        <NavigationMenu>
            <NavigationMenuList>
                {["all", "red", "white", "sparkling", "rose", "champagne"].map((tab) => (
                    <NavigationMenuItem key={tab}>
                        <NavigationMenuLink
                            href="#"
                            className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${
                                activeTab === tab ? "bg-accent text-accent-foreground" : "bg-background text-muted-foreground"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Wine
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </div>
)
