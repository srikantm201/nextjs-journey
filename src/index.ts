import { capitalize, clamp, average } from "./utils.js";

console.log(capitalize(42));   // "Next.js"
console.log(clamp(150, 0, 100));      // 100
const avg = average([]);
console.log(avg ?? "no data");        // "no data"