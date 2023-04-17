import { useEffect, useState } from "react";
import { getSummary } from "../utils/services/getSummary";
import { useAuth0 } from "@auth0/auth0-react";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import 'tippy.js/themes/light.css';

const InputSummarize = () => {
    const [inputValue, setInputValue] = useState();
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const { isAuthenticated } = useAuth0()

    const handleSummarize = () => {
        const inputElements = document.querySelectorAll('textarea');
        const inputValues = Array.from(inputElements).map((input) => input.value);
        const summaryText = inputValues.join(', ');
        setInputValue(summaryText);
    };

    const clearSummary = () => {
        setSummary('');
    };

    useEffect(() => {
        if (inputValue) {
            setIsLoading(true)
            getSummary(inputValue)
                .then(res => {
                    setSummary(res.summary)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.error(err)
                    setIsLoading(false)
                })
        }
    }, [inputValue])

    const isDisabled = !isAuthenticated || isLoading
    return (
        <div className="flex flex-col items-center justify-center m-6 md:m-0">
            <div className="w-3/4">
                <div className="input-container">
                    <textarea
                        className="rounded-md border input-text px-3 w-full py-2 margin-bottom-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Enter your text to summarize here..."
                    />
                    <div className="flex justify-between">
                        <Tooltip
                            disabled={!isDisabled}
                            title="You must be logged in to use this function"
                        >
                            <button
                                className={`submit-button px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                                ${!isAuthenticated || isLoading ? 'bg-gray-500 text-gray-300' : 'bg-blue-500 text-white'}`}
                                type="submit"
                                onClick={handleSummarize}
                                disabled={isDisabled}
                                >
                                Resume this
                            </button>
                        </Tooltip>
                        {summary && 
                            <button
                                className={`px-3 py-2 bg-gray-300 rounded-md focus:outline-none focus:ring-2`}
                                onClick={clearSummary}
                                disabled={isDisabled}
                            >
                                Clear
                            </button>
                        }
                    </div>
                    {isLoading &&
                        <div role="status" className="flex justify-center">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                            <p className="text-gray-400">Summarizing...</p>
                        </div>
                    }
                </div>

                {summary &&
                    <>
                        <div
                            className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg mt-2"
                            role="alert"
                        >
                            <div className="flex items-center gap-4">
                                <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                                    <svg
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>

                                <p className="font-medium sm:text-lg">Your summary!</p>
                            </div>

                            <p className="mt-4 text-gray-500">
                                {summary}
                            </p>
                        </div>
                    </>
                }
            </div>
        </div>

    );
};

export default InputSummarize;
