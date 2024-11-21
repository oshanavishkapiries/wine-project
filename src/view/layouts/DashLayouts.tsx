import React, {useState} from "react";
import {
    Sidebar,
    SidebarBody,
    SidebarLink,
} from "@/components/aceternity/sidebar";
import {Routes} from "@/constant/navigation";
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
                            {open ? "Logo" : "Logoicon"}
                            <div className="mt-8 flex flex-col gap-2">
                                {Routes.map((link, idx) => (
                                    <SidebarLink key={idx} link={link}/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SidebarLink
                                link={{
                                    label: "Manu Arora",
                                    to: "#",
                                    icon: (
                                        <img
                                            src="https://assets.aceternity.com/manu.png"
                                            className="h-7 w-7 flex-shrink-0 rounded-full"
                                            width={50}
                                            height={50}
                                            alt="Avatar"
                                        />
                                    ),
                                }}
                            />
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
