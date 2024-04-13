import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className="bg-white">
            <div className="text-center">
                <div className="h-[550px] bg-center bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-no-repeat"></div>

                <div className="-mt-12 ">
                    <h3 className="text-4xl mb-1 ">
                        {`Look like you're lost`}
                    </h3>

                    <p className='text-blue-950'>The page you are looking for not available!</p>

                    <Link to='/'
                        className=" py-[13px] px-10 text-lg bg-caribbeangreen-200 hover:bg-caribbeangreen-400 my-5 inline-block rounded-full font-semibold duration-300 bg-blue-900 text-white hover:bg-blue-600"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default Error
