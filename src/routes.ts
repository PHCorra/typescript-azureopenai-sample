import express from "express";
import  codeAnalysisController  from "./controller/CodeAnalysisController";
import multer from "multer";


export const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });


// router.post("/", upload.single('code'), codeAnalysisController.analyzeCode);

router.post("/", codeAnalysisController.analyzeCode);