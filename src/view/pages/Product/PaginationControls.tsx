import { Pagination } from "@/components/ui/pagination";

export const PaginationControls = ({ page, totalPages, onPageChange }:any) => (
    <div className="flex justify-end mt-4">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
)