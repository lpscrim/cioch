import Card from "./Card";


const cards = [
    {
        title: "Card 1",
        description: "Description for Card 1",
        imageSrc: "/jacket1.jpg",
        imageAlt: "Image for Card 1",
        color: "white",
    },
    {
        title: "Card 2",
        description: "Description for Card 2",
        imageSrc: "/jacket2.jpg",
        imageAlt: "Image for Card 2",
        color: "amber-100",
    },
    {
        title: "Card 3",
        description: "Description for Card 3",
        imageSrc: "/jacket3.jpg",
        imageAlt: "Image for Card 3",
        color: "amber-200",
    },
    {   title: "Card 4",
        description: "Description for Card 4",
        imageSrc: "/jacket4.jpg",
        imageAlt: "Image for Card 4",
        color: "amber-300",
    },
    {
        title: "Card 5",
        description: "Description for Card 5",
        imageSrc: "/jacket5.jpg",
        imageAlt: "Image for Card 5",
        color: "amber-400",
    },
    {
        title: "Card 6",
        description: "Description for Card 6",
        imageSrc: "/jacket1.jpg",
        imageAlt: "Image for Card 6",
        color: "amber-500",
    },
    {
        title: "Card 7",
        description: "Description for Card 7",
        imageSrc: "/jacket1.jpg",
        imageAlt: "Image for Card 7",
        color: "white",
    }
]
export default function CardScroller() {
    return (
        <section className="py-10">
            <div className="mx-auto w-full px-6">
                <div className="flex justify-center overflow-x-hidden space-x-4 py-10">
                    <div className="flex flex-nowrap space-x-8 whitespace-nowrap slide">
                        {cards.map((card, index) => (
                            <div key={index}>
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    imageSrc={card.imageSrc}
                                    imageAlt={card.imageAlt}
                                    color={card.color}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}