// // src/utils/common.ts

import { reactive } from "vue";

// // 公共变量
// export const API_URL = 'https://api.example.com';

// // 公共方法
// export function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// export function add(a: number, b: number): number {
//   return a + b;
// }


export let styleUtils = reactive( {
  windowsClientHeight: document.documentElement.clientHeight,

  methodOne(param: string): string {
    
    return `Method One: ${param}`;
  },
  methodTwo(param: number): number {
    return param * 2;
  },
});

