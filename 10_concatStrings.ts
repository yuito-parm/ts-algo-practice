const words: string[] = ["AI", "で", "楽しく", "勉強"];

const concatStrings = (words: string[]): string => words.reduce((words, curr) => words += curr, "");

console.log(concatStrings(words));