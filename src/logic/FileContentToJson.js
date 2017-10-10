export const articleQuestionsToJson = (content) => {
    var lines = content.split("\r\n");
    return JSON.stringify({questions: lines.map((l) => lineToJson(l))})
}

const lineToJson = (line) => {
    const splitterIndex = line.indexOf(" ")
    const rightAnswer = line.substring(0, splitterIndex)
    const question = line.substring(splitterIndex)
    return {question: question, rightAnswer: rightAnswer}
}