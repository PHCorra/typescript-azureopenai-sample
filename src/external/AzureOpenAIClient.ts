import { AzureOpenAI } from "openai";
import "@azure/openai/types";
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const deployment  = process.env.AZURE_OPENAI_MODEL;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;

export const client = new AzureOpenAI({endpoint, apiKey, apiVersion, deployment })




