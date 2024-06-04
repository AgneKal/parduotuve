
import { app } from "./app.js";

console.log('serveris veikia');

app.listen(3999, () => {
    console.log("Express serveris paleistas ant port 3999");
}) 