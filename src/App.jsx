import InputSummarize from "./components/InputSummarize.jsx"

function App() {

    return (
        <div>
            <div className="flex justify-center mt-5">
                <img className="w-32" src="https://cdn-icons-png.flaticon.com/512/17/17169.png" alt="logo"/>
            </div>
            <h1 className="text-4xl text-center mt-2">
                Summarizer
            </h1>
            <p className="mt-2 mb-5 text-center text-gray-400">Resume your texts quickly and accurately</p>
            <InputSummarize/>
        </div>
    )
}

export default App
