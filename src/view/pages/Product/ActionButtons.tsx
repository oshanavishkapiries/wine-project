import {Button} from "@/components/ui/button.tsx";

export const ActionButtons = () => (
    <>
        <Button size="sm" variant="outline" className="mr-2">
            <svg className="feather feather-edit" fill="none" height="24"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
        </Button>
        <Button size="sm">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4c-16.8 0-32.4 8.827-41 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16c0 8.9 7.125 16 16 16h16v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16c8.9 0 16-7.1 16-16V96c0-8.87-7.1-16-16-16zM171.9 50.88c1-1.75 3-2.88 5.1-2.88h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4l17.5-29.12zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320c0 8.8-7.2 16-16 16zm-128-48c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16zm-80 0c8.8 0 16-7.2 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16zm160 0c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16s-16 7.2-16 16v208c0 8.8 7.2 16 16 16z"
                    fill="#ffffff" className="fill-000000"></path>
            </svg>
        </Button>
    </>
)