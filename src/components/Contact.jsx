import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaKaggle } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="pt-24 pb-8 bg-[#343a40]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">Get in Touch</h1>
            <div className="md:px-20 my-8 md:my-16 grid gap-10 lg:grid-cols-[300px_minmax(500px,_1fr)]">
                <div className="py-4 px-8 text-center">
                    <h1 className="text-xl font-semibold text-white">FOLLOW ME</h1>
                    <div className="flex justify-center space-x-5 mt-4 ml-1">
                        <a href="https://twitter.com/dec62021" target="_blank">
                            <BsTwitter className="text-xl text-[#aab0b4]" />
                        </a>
                        <a href="https://www.linkedin.com/in/kishan-magar-4b569b201/" target="_blank">
                            <BsLinkedin className="text-xl text-[#aab0b4]" />
                        </a>
                        <a href="https://www.github.com/bangsikishan" target="_blank">
                            <BsGithub className="text-xl text-[#aab0b4]" />
                        </a>
                        <a href="https://www.kaggle.com/kishanbangsimagar" target="_blank">
                            <FaKaggle className="text-xl text-[#aab0b4]" />
                        </a>
                    </div>
                </div>
                <div className="px-3 md:py-4 md:px-8">
                    <h1 className="text-xl font-semibold text-white">SEND ME A NOTE</h1>
                    <form className="flex flex-col mt-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input className="py-3 px-3 sm:py-3 sm:px-6 rounded-lg text-white bg-[#232a31]" type="text" name="name" id="name" placeholder="Name" />
                            <input className="py-3 px-3 sm:py-3 sm:px-6 rounded-lg text-white bg-[#232a31]" type="email" name="email" id="email"  placeholder="Email" />
                        </div>
                        <textarea className="py-1 px-1 mt-4 sm:py-3 sm:px-6 rounded-lg text-white bg-[#232a31]" name="message" id="message" cols="30" rows="6" placeholder="Message me...">
                        </textarea>
                        <button className="w-2/4 lg:w-[30%] py-3 mt-4 mx-auto rounded-full sm:text-lg text-white bg-[#20c997] hover:bg-[#1cba8b] transition ease-in-out duration-300">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;