import axios from 'axios';

/**
 * Summarize a given text with specific parameters and returns the result.
 * @param data - The text data that needs to be summarized.
 * @returns The function `getSummary` is returning the data obtained from the API call to
 * `https://api.cohere.ai/v1/summarize` after passing the specified parameters in the request body and
 * headers. The data returned is the summarized version of the input text data.
 */
export async function getSummary(data) {
    const COHERE_URL = 'https://api.cohere.ai/v1/summarize'
    const API_KEY = import.meta.env.VITE_COHERE_API_KEY
    const headers = { 'Authorization': `Bearer ${API_KEY}` }
    const res = await axios.post(COHERE_URL, {
        "length": "medium",
        "format": "paragraph",
        "model": "summarize-xlarge",
        "extractiveness": "low",
        "temperature": 0.8,
        "text": data
    }, { headers })

    return res.data
}