import Image from "../../assets/signup.png";

const Signup = () => {
    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img src={Image} alt="Sign Up Illustration" className="w-full h-full object-cover rounded-l-lg" />
        </div>
        <div className="flex-1 p-6 sm:p-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <p className="text-center mb-8 text-gray-600">Enter details to create your account</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mb-4 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Already Registered? <a href="/signin" className="text-blue-500">Login</a>
              </p>
            </div>
            {/* <div className="flex items-center justify-center mt-4">
              <span className="text-gray-600">OR</span>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-google"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-linkedin"></i>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>

    );
}

export default Signup;