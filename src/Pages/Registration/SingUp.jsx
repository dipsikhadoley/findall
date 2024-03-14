import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-blue-200 px-1 lg:px-8 py-6 border border-black-200 rounded-xl shadow-md">
                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-Black-500 '>
                        SignUp
                    </h2>
                </div>
                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black-200'
                    />
                </div>
                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black-200'
                    />
                </div>
                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black-200'
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="Confirmpassword"
                        placeholder='ConfirmPassword'
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-black-200'
                    />
                </div>
                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-purple-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;