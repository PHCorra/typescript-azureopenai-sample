import { Request, Response } from "express";
import CodeAnalysisService from "../service/CodeAnalysisService";

interface ICodeAnalysisController {
    analyzeCode: (req: Request, res: Response) => Promise<any>;
}

export class CodeAnalysisController implements ICodeAnalysisController {


    async analyzeCode(req: Request, res: Response) {
        try { 
            const prompt = req.body;

            const analyzeResponse = await CodeAnalysisService.analyzeCode(prompt);
            return res.status(200).json(analyzeResponse);
        } catch (error) {
            console.log(error);
        }
    }
}

// Export Singleton
export default new CodeAnalysisController();


