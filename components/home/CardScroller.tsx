import Card from "./home/Card";


const jackets = [
    {
        title: "jacket 1",
        description: "Description for jacket 1",
        imageSrc: "/jacket1.jpg",
        imageAlt: "Image for jacket 1",
        color: "white",
    },
    {
        title: "jacket 2",
        description: "Description for jacket 2",
        imageSrc: "/jacket2.jpg",
        imageAlt: "Image for jacket 2",
        color: "amber-100",
    },
    {
        title: "jacket 3",
        description: "Description for jacket 3",
        imageSrc: "/jacket3.jpg",
        imageAlt: "Image for jacket 3",
        color: "amber-200",
    },
    {   title: "jacket 4",
        description: "Description for jacket 4",
        imageSrc: "/jacket4.jpg",
        imageAlt: "Image for jacket 4",
        color: "amber-300",
    },
    {
        title: "jacket 5",
        description: "Description for jacket 5",
        imageSrc: "/jacket5.jpg",
        imageAlt: "Image for jacket 5",
        color: "amber-400",
    },
]
export default function CardScroller() {
    return (
        <section className="py-10">
            <div className="mx-auto w-full px-6">
                <div className="relative flex justify-center overflow-x-hidden space-x-20 py-10">
                    <div className="flex flex-nowrap space-x-10 whitespace-nowrap animate-marquee">
                        {jackets.map((jacket, index) => (
                            <div key={index}>
                                <Card
                                    title={jacket.title}
                                    description={jacket.description}
                                    imageSrc={jacket.imageSrc}
                                    imageAlt={jacket.imageAlt}
                                    color={jacket.color}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute flex flex-nowrap space-x-10 whitespace-nowrap animate-marquee2">
                        {jackets.map((jacket, index) => (
                            <div key={index}>
                                <Card
                                    title={jacket.title}
                                    description={jacket.description}
                                    imageSrc={jacket.imageSrc}
                                    imageAlt={jacket.imageAlt}
                                    color={jacket.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}