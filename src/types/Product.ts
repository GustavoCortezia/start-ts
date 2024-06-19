interface ProductType {
    id:string,
    name:string,
    enable:boolean,
    description?:string,
    kind: 'outros' | 'diversos' | 'tech';
}

export default ProductType;