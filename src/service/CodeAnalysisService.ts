import { client } from "../external/AzureOpenAIClient";

type prompt = {
    message: string;
}

interface ICodeAnalysisService {
    analyzeCode: (prompt: prompt) => Promise<any>;
}


export class CodeAnalysisService implements ICodeAnalysisService {

    chatHistory: string[] = [];


    async analyzeCode(prompt: prompt) {
        this.chatHistory.push(prompt.message);
        const fullPrompt = this.chatHistory.join('\n');
        console.log(fullPrompt);
        const result = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {"role": "system", "content": "You are an AI Assistant called Ajudante AI"},
                {"role": "user", "content": `${fullPrompt}`}
            ]
        })

        console.log(this.chatHistory);
        console.log(result)
        

        return result.choices[0].message;
    }
}

// Export Singleton
export default new CodeAnalysisService();