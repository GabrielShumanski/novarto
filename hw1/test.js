import { readFileSync } from 'fs';

async function example(){
    try{
        let data = readFileSync('D:\\Programs\\novarto\\hw1\\input.txt', 'utf8');
        for (let i = 0, j = 0; i < data.length + 1; ++i) {
            if(data.charAt(i) == '\n') {
                let inputLine = data.slice(j, i);
                inputLine = inputLine.split(" ");
                console.log(inputLine);
                j = i;
            }
        }
    } catch(err) {
        console.error(err);
    }
}
example();

