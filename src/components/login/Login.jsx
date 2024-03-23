export default function Login() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center item-center bg-blue-500">
                <div className="w-4/5 md:w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <div className="w-80 md:w-96 lg:w-1/2 h-auto p-8 m-4 flex border shadow-lg rounded-lg bg-white">
                        <form action="" className="flex flex-col justify-center">
                            
                            <div className="flex flex-col items-center mb-10">
                                <h1 className="text-lg md:text-xl font-bold">Login to Account</h1>
                                <h2 className="text-xs md:text-sm text-center">Please enter your email and password to continue</h2>
                            </div>

                            <div className="flex flex-col w-full mb-5">
                                <label htmlFor="" className="mb-2 text-xs md:text-sm">Email Address</label>
                                <input type="email" placeholder="nama@gmail.com" className="bg-gray-100 w-64 md:w-80 lg:w-80 rounded-lg p-2 lg:p-3" />
                            </div>

                            <div className="flex flex-col w-full mb-2">
                                <div className="flex w-full justify-between md:w-80">
                                    <label htmlFor="" className="mb-2 text-xs md:text-sm">Password</label>
                                    <label htmlFor="" className="mb-2 text-xs md:text-sm">Forget Password?</label>
                                </div>
                                <input type="password" placeholder="" className="bg-gray-100 w-64 md:w-80 lg:w-80 rounded-lg p-2 lg:p-3" />
                            </div>

                            <div className="flex mb-5">
                                <input type="checkbox" />
                                <label htmlFor="Remember Me" className="text-gray-700 text-xs ml-2">Remember Password</label>
                            </div>

                            <button type="submit" className="font-xs text-white text-sm bg-blue-500 w-64 md:w-80 rounded-md p-2 my-6">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
