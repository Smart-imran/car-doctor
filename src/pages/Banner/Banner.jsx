import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
    const slides = [
        {
            id: 1,
            img: img1,
            title: "Affordable Price For Car Servicing",
            description: "There are many variations of passages available, but the majority have suffered alteration in some form."
        },
        {
            id: 2,
            img: img2,
            title: "Expert Technicians At Your Service",
            description: "Experience professional car service with skilled technicians who care for your vehicle."
        },
        {
            id: 3,
            img: img3,
            title: "Reliable Car Maintenance Solutions",
            description: "Keep your car running smoothly with our trusted maintenance services."
        },
        {
            id: 4,
            img: img4,
            title: "Quality Assurance For Your Vehicle",
            description: "We prioritize quality to ensure your vehicle gets the best care it deserves."
        },
        {
            id: 5,
            img: img5,
            title: "Drive Smoothly With Confidence",
            description: "Drive worry-free with our top-notch servicing and expert solutions."
        },
        {
            id: 6,
            img: img6,
            title: "Customer Satisfaction Guaranteed",
            description: "Our goal is to exceed your expectations with every service we provide."
        },
    ];

    return (
        <div className="carousel w-full">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    id={`slide${slide.id}`}
                    className="carousel-item relative w-full h-[600px]"
                >
                    <img src={slide.img} className="w-full rounded-xl" />
                    <div className="absolute left-0 h-full w-full top-0 flex items-center bg-gradient-to-r from-black/50 to-pink-400/50 rounded-xl">
                        <div className="text-white space-y-7 w-1/3 pl-12">
                            <h2 className="text-6xl font-extrabold">{slide.title}</h2>
                            <p>{slide.description}</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a
                            href={`#slide${index === 0 ? slides.length : index}`}
                            className="btn btn-circle bg-orange-500 hover:bg-orange-600 text-white mr-5"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                            className="btn btn-circle bg-orange-500 hover:bg-orange-600 text-white"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
