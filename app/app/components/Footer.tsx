const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-1 text-sm bg-gray-200 absolute bottom-0">
            <div>
                <span>© 2024 Muhammad Hassan Rajput. All rights reserved.</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex items-center justify-center">
                    <span>Created with</span>
                    <img width={30} className="mx-1" src="/heart.png" alt="heart icon" />
                    <span>by&nbsp;</span>
                    <p className="font-bold text-blue-600">Hassan Rajput</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
