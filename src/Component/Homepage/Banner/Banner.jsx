import React from 'react';
import bannerBg from "../../../assets/bg-shadow.png";
import bannerMain from "../../../assets/banner-main.png";

const Banner = () => {
    return (
        <div
            className="m-5 bg-[#131313] min-h-screen bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{
                backgroundImage: `url(${bannerBg})`,
            }}
        >
            

            <div className="hero-content text-center text-neutral-content">

                <div className="m-8 py-8 flex flex-col items-center">

                    
                    <img
                        src={bannerMain}
                        alt="Banner"
                        className="w-[200px] md:w-[500px] "
                    />

                    <h1 className="mt-8 text-5xl font-bold">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>

                    <p className="mt-4 max-w-lg">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button className="btn btn-primary mt-6 bg-[#E7FE29]text-black  font-bold border-none rounded-xl text-center">
                        Claim Free Credit
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Banner;