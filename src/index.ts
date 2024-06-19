import {CategoryType, ProductType} from "./types";
import {v4 as uuid} from 'uuid';
import transformUpperText from "./utils/transformUpperText";

const category:CategoryType = {
    id: uuid(),
    name: 'Geral',
    enable: true,
}

const produto: ProductType = {
    id: uuid(),
    name: 'Mouse',
    enable: false,
    kind: "tech"
}

console.log(produto);

const test = transformUpperText('aaaaaaaaaaaaaaa');

console.log(test);