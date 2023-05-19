import { readFileSync } from 'fs';

export function fileReader(){
    let inputData = [];
    try {
        let data = readFileSync('D:\\Programs\\novarto\\hw1\\input.txt', 'utf8');
        //console.log(data.lastIndexOf("\r\n"));
        //console.log(data);
        for (let i = 0, j = 0; i < data.length; i++) {
            if (data.charAt(i) == "\r" || data.charAt(i) == '.') {
                let inputLine = data.slice(j, i);
                inputLine = inputLine.split(" ");
                inputData.push(
                    {
                        'type' : inputLine [0],
                        'x'    : inputLine [1],
                        'y'    : inputLine [2]
                    }
                );
                j = i + 2;
            }
        }
    } catch(err) {
        console.error(err);
    }
    return inputData;
}
fileReader();

