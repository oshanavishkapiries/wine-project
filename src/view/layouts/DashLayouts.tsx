import React, {useState} from "react";
import {
    Sidebar,
    SidebarBody,
    SidebarLink,
} from "@/components/aceternity/sidebar";
import {Routes} from "@/constant/navigation.ts";
import DashNavBar from "@/components/common/DashNavBar.tsx";

const DashLayouts = ({children}: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={
                    "flex flex-col md:flex-row w-full h-screen flex-1 overflow-hidden"
                }
            >
                <Sidebar open={open} setOpen={setOpen}>
                    <SidebarBody className="justify-between gap-10">
                        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            {open ? "WINE" : "W"}
                            <div className="mt-8 flex flex-col gap-2">
                                {Routes.map((link, idx) => (
                                    <SidebarLink key={idx} link={link}/>
                                ))}
                            </div>
                        </div>
                    </SidebarBody>
                </Sidebar>
                <div className={'flex relative flex-col flex-1 overflow-y-auto overflow-x-hidden'}>
                    <DashNavBar/>
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashLayouts;
