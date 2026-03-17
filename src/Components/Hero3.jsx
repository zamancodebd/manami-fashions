import React from 'react';

const Hero3 = () => {
    const logos = [
        { src: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773076120/1200px-Global_Organic_Textile_Standard_logo.svg__u9pfmk.png", w: "w-24", h: "h-20" },
        { src: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773076121/20170426104313_BCI_Logo_2015_m6vfni.png", w: "w-44", h: "h-14" },
        { src: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773076120/oeko-tex-logo_mmxgpg.png", w: "w-54", h: "h-24" },
        { src: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773076120/Oeko-tex_standard100_logo_rgb-2022_a8e41h.jpg", w: "w-28", h: "h-30" },
        { src: "https://res.cloudinary.com/dcdmktxtz/image/upload/v1773076119/fairtrade_international.png_b8zmnm.webp", w: "w-24", h: "h-24" },
        { src: "https://digitalwages.org/wp-content/uploads/2021/12/logo1.svg", w: "w-44", h: "h-24" },
        { src: "https://britexgroupbd.com/wp-content/uploads/2024/10/Higg-Index-2.png", w: "w-44", h: "h-24" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzn-_jkjgvW7KVD32RgiVLrL2npJd5bCc4w&s", w: "w-44", h: "h-24" },
        { src: "https://wrapcompliance.org/wp-content/uploads/2022/03/WRAP_Logo_Update_Color_RGB.png", w: "w-24", h: "h-24" },
        { src: "https://33440001.s21i.faiusr.com/95/ABUIABBfGAAgsdmtwwYosvXI7AUwuAg4jwc.webp", w: "w-24", h: "h-24" },
        { src: "https://cdn.scsglobalservices.com/files/GRS_Color.png?VersionId=sbc1q5mlw63yd2u2cn0hs6jnzf2gljhr486u3dkgm2y", w: "w-34", h: "h-24" },
        { src: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/86cda885-734f-4393-8a17-e8ff7d5ebb21.png", w: "w-34", h: "h-24" }
    ];

    return (
        <div className="bg-white">
            <section className="py-12 bg-white text-black">
                <div className="container p-4 mx-auto text-center mb-8">
                    <h2 className="text-4xl font-bold uppercase tracking-widest mb-4">
                        Our Credentials
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed uppercase tracking-tighter">
                        We maintain international compliance standards to ensure ethical manufacturing, 
                        product quality, and sustainable production practices.
                    </p>
                </div>

                <div className="container flex flex-wrap justify-center mx-auto">
                    {logos.map((img, index) => (
                        <div key={index} className="flex justify-center w-1/2 p-8 align-middle md:w-1/3 xl:w-1/4 border-[0.5px] border-gray-100 overflow-hidden">
                            <img 
                                src={img.src} 
                                alt="Credential Logo"
                                /* This class makes it move and stop on hover */
                                className={`${img.w} ${img.h} object-contain jiggle-continuous`} 
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Hero3;