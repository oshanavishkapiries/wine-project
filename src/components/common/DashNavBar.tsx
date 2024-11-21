import {BellIcon} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar"
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover"
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"

export default function DashNavBar() {
    return (
        <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="order-last">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg"/>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex-1 text-center text-lg font-medium">Acme Inc</div>
            <div className="flex items-center gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="order-first">
                            <BellIcon className="h-5 w-5"/>
                            <span className="sr-only">Notifications</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0">
                        <Card className="shadow-none border-0">
                            <CardHeader className="border-b">
                                <CardTitle>Notifications</CardTitle>
                                <CardDescription>You have 3 unread messages.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"/>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium">Your call has been confirmed.</p>
                                        <p className="text-sm text-muted-foreground">5 min ago</p>
                                    </div>
                                </div>
                                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"/>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium">You have a new message!</p>
                                        <p className="text-sm text-muted-foreground">1 min ago</p>
                                    </div>
                                </div>
                                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500"/>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium">Your subscription is expiring soon!</p>
                                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
}