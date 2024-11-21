import {ProfileDropdown} from "@/components/common/ProfileDropdown.tsx";
import {NotificationPopover} from "@/components/common/NotificationPopover.tsx";


export default function DashNavBar() {
    return (
        <header className="flex sticky z-50 top-0 left-0 min-h-16 w-full items-center justify-between bg-background px-4 md:px-6">
            <div className="flex justify-between text-center text-lg font-medium">WINEADMIN</div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-4">
                    <ProfileDropdown/>
                </div>
                <div className="flex items-center gap-4">
                    <NotificationPopover/>
                </div>
            </div>
        </header>
    )
}