

export default function CardScroller() {
    return (
        <section className="py-20">
            <div className="mx-auto w-full px-6">
                <div className="flex overflow-x-hidden space-x-4 py-10 side-to">
                    <div className="flex flex-nowrap space-x-4 side-to-side whitespace-nowrap">
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 1</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 2</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 3</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 4</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 5</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 6</div>
                        <div className="min-w-[500px] bg-white rounded-lg shadow-md px-15 py-50">Card 7</div>
                    </div>
                </div>
            </div>
        </section>
    );
}