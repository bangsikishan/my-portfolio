import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div id="main" className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
            <div className="flex flex-col justify-start items-center space-y-6 w-full h-screen text-white bg-black/50">
                <p className="text-3xl md:text-4xl mt-80 mb-4">Welcome</p>
                <TypeAnimation
                    sequence={[
                        "I'm Kishan Magar",
                        3000,
                        "I'm a Web Developer",
                        3000,
                        "I'm a Blogger",
                        3000
                    ]}
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                    className="text-3xl md:text-5xl font-bold"
                />
                <p className="text-xl">based in Kathmandu, Nepal</p>
            </div>
        </div>
    );
}
 
export default Home;