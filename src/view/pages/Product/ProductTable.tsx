import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
//import {ProductDetail} from "@/view/pages/Product/ProductDetail.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {ActionButtons} from "@/view/pages/Product/ActionButtons.tsx";

export const ProductTable = ({products}: any) => {
    if (products.length === 0) {
        return (
            <div className="text-center text-lg text-muted-foreground">
                No items
            </div>
        );
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleRowClick = (product: any) => {
        setIsOpen(true);
        setSelectedProduct(product);
    };

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Varietal</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>ABV</TableHead>
                        <TableHead>Vintage</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product: any) => (
                        <TableRow key={product._id} onClick={() => handleRowClick(product)}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.sizeTypes[0]?.name || 'N/A'}</TableCell>
                            <TableCell>{product.categories[0]?.name || 'N/A'}</TableCell>
                            <TableCell>{"---"}</TableCell>
                            <TableCell>{product.regions[0]?.region || 'N/A'}</TableCell>
                            <TableCell>{"---"}%</TableCell>
                            <TableCell>{product.vintage.year}</TableCell>
                            <TableCell className="text-right">{product.unitPrice.toFixed(2)}</TableCell>
                            <TableCell className="text-right">
                                <ActionButtons/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Product Detail</DialogTitle>
                        <DialogDescription>
                            View detailed information about the product.
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        {/*<ProductDetail product={selectedProduct} />*/}
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
