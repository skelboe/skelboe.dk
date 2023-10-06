import GoogleAnalytics from '../components/google-analytics'

export default (): React.ReactElement => (
    <div className="h-screen flex flex-row items-center justify-center">
        <div className="text-center px-10 py-4">
            <div className="font-semibold mb-2 text-lg">Lars Skelboe</div>
            <div className="font-light text-sm text-gray-600 tracking-wide">
                <div className="flex">
                    <a href="mailto:lars@skelboe.dk" className="">
                        lars@skelboe.dk
                    </a>
                    <div className="px-1">|</div>
                    <a href="https://www.linkedin.com/in/lars-skelboe-86948814/" className="">
                        LinkedIn
                    </a>
                    <div className="px-1">|</div>
                    <a href="https://github.com/skelboe">GitHub</a>
                </div>
                Lisbon, Portgual
            </div>
        </div>
        <GoogleAnalytics id="G-SRJWR6E259" timeout={2000} />
    </div>
)
