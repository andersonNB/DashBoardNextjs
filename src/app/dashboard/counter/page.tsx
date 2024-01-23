import { CartCounter } from "@/shopping-cart"





export const metadata = {
    title: "Shopping Cart - Counter Page",
    description: "un simple contador"
}


export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter />
        </div>
    )
}