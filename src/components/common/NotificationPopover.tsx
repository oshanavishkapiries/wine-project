import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Button} from "@/components/ui/button.tsx";
import {BellIcon} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export const NotificationPopover = () => (
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
)