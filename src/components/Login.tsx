export const Login = ({ setUserLoggedIn }: any) => {
    const handleClick = () => {
        setUserLoggedIn(true);
    }

    return (
        <div>
            <section className="App h-screen w-full flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-md bg-gray-100" >
                    <form className="bg-white shadow-md rounded px-8 py-8 pt-8">
                        <div className="px-4 pb-4">
                            <label htmlFor="email" className="text-sm block font-bold pb-2">EMAIL ADDRESS</label>
                            <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" />
                        </div>
                        <div className="px-4 pb-4">
                            <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
                            <input type="password" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" />
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleClick} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}