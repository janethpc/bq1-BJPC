import { productos } from "../../data/menu";

export const getProductosBytype = (type) => {
    const validType = ['Desayuno','almuerzo'];
    if (!validType.includes(type)) {
        throw new Error(`${type} is not a valid type`);
    }

    return productos.filter( producto => producto.type === type);
}