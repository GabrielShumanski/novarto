import { readFileSync } from 'fs';

export class FileReader {
    static readFile(filePath) {
        let inputData = [];
        try {
            let data = readFileSync(filePath, 'utf8');
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
            return inputData;
        } catch(err) {
            console.error(err);
        }
    }
}