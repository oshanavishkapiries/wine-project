import {useState, useMemo} from "react"
import {Header} from "@/view/pages/Product/Header.tsx";
import {ProductTable} from "@/view/pages/Product/ProductTable.tsx";
import {PaginationControls} from "@/view/pages/Product/PaginationControls.tsx";

const Product = () => {
    const [activeTab, setActiveTab] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [page, setPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)

    const products = [
        {
            "_id": "6735e6de42be4500a383ef4a",
            "name": "Silver Oak Cabernet Sauvignon 2017",
            "description": "A full-bodied red wine with floral aromas and earthy flavors.",
            "unitPrice": 499.99,
            "unitDiscount": 0,
            "sixPackPrice": 500.9,
            "dozenPrice": 588.88,
            "originalPrice": 599.99,
            "rating": 0,
            "categories": [
                {
                    "_id": "67348ae22e66ddded5d50f1d",
                    "name": "Red Wine"
                }
            ],
            "subCategories": [
                "67348ae22e66ddded5d50f20"
            ],
            "regions": [
                {
                    "_id": "67348ae52e66ddded5d50f61",
                    "region": "Napa Valley"
                }
            ],
            "subRegions": [
                "67348ae52e66ddded5d50f64"
            ],
            "vintage": {
                "_id": "6734702a58e824ae3bdda220",
                "year": 2015,
                "description": "Excellent year with balanced acidity and tannins."
            },
            "sizeTypes": [
                {
                    "_id": "6734702a58e824ae3bdda1de",
                    "name": "Standard (750ml)"
                }
            ],
            "collectables": [
                {
                    "_id": "6734702a58e824ae3bdda1d8",
                    "name": "Limited Release Wine"
                }
            ],
            "image": "https://res.cloudinary.com/dty982jiw/image/upload/v1731585669/ecommerce-site/Silver%20Oak%20Cabernet%20Sauvignon%202017/borwzge0vulejs7mxobg.png",
            "inStock": true,
            "isActive": true,
            "dryness": "6734702a58e824ae3bdda1e9"
        },
        {
            "_id": "6735e76342be4500a383ef4e",
            "name": "Opus One 2018",
            "description": "A full-bodied red wine with floral aromas and earthy flavors.",
            "unitPrice": 499.99,
            "unitDiscount": 0,
            "sixPackPrice": 500.9,
            "dozenPrice": 588.88,
            "originalPrice": 599.99,
            "rating": 0,
            "categories": [
                {
                    "_id": "67348ae22e66ddded5d50f1d",
                    "name": "Red Wine"
                }
            ],
            "subCategories": [
                "67348ae22e66ddded5d50f1f"
            ],
            "regions": [
                {
                    "_id": "67348ae52e66ddded5d50f61",
                    "region": "Napa Valley"
                }
            ],
            "subRegions": [
                "67348ae52e66ddded5d50f64"
            ],
            "vintage": {
                "_id": "6734702a58e824ae3bdda220",
                "year": 2015,
                "description": "Excellent year with balanced acidity and tannins."
            },
            "sizeTypes": [
                {
                    "_id": "6734702a58e824ae3bdda1de",
                    "name": "Standard (750ml)"
                }
            ],
            "collectables": [
                {
                    "_id": "6734702a58e824ae3bdda1d8",
                    "name": "Limited Release Wine"
                }
            ],
            "image": "https://res.cloudinary.com/dty982jiw/image/upload/v1731585870/ecommerce-site/Opus%20One%202018/b2woy3ufsvk2dmnksmb2.png",
            "inStock": true,
            "isActive": true,
            "dryness": "6734702a58e824ae3bdda1e9"
        },
        {
            "_id": "6735e79142be4500a383ef52",
            "name": "Caymus Cabernet Sauvignon 2017",
            "description": "A full-bodied red wine with floral aromas and earthy flavors.",
            "unitPrice": 499.99,
            "unitDiscount": 0,
            "sixPackPrice": 500.9,
            "dozenPrice": 588.88,
            "originalPrice": 599.99,
            "rating": 0,
            "categories": [
                {
                    "_id": "67348ae22e66ddded5d50f1d",
                    "name": "Red Wine"
                }
            ],
            "subCategories": [
                "67348ae22e66ddded5d50f1f"
            ],
            "regions": [
                {
                    "_id": "67348ae52e66ddded5d50f61",
                    "region": "Napa Valley"
                }
            ],
            "subRegions": [
                "67348ae52e66ddded5d50f64"
            ],
            "vintage": {
                "_id": "6734702a58e824ae3bdda220",
                "year": 2015,
                "description": "Excellent year with balanced acidity and tannins."
            },
            "sizeTypes": [
                {
                    "_id": "6734702a58e824ae3bdda1de",
                    "name": "Standard (750ml)"
                }
            ],
            "collectables": [
                {
                    "_id": "6734702a58e824ae3bdda1d8",
                    "name": "Limited Release Wine"
                }
            ],
            "image": "https://res.cloudinary.com/dty982jiw/image/upload/v1731585917/ecommerce-site/undefined/n7sth81lhaedzc4myksz.png",
            "inStock": true,
            "isActive": true,
            "dryness": "6734702a58e824ae3bdda1e9"
        },
    ]

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (activeTab === "all" || product.categories[0].name === activeTab)
            )
        })
    }, [searchTerm, activeTab])

    const indexOfLastProduct = page * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    return (
        <main className="flex flex-col">
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <div className="container mx-auto py-8 px-4 md:px-6">
                <ProductTable products={currentProducts}/>
                <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage}/>
            </div>
        </main>
    )
}


export default Product