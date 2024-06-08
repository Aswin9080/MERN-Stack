import { Link } from "react-router-dom";

function HDTT(props) {
    const HDTTdata = props.HDTTdata;

    const sections = [
        { title: "Hot Releases", startIndex: 0, endIndex: 2 },
        { title: "Deal & Outlet", startIndex: 3, endIndex: 5 },
        { title: "Top Selling", startIndex: 6, endIndex: 8 },
        { title: "Trendy", startIndex: 9, endIndex: 11 }
    ];

    return (
        <div className="">
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="m-5 mt-10">
                    <h1 className="text-2xl mb-3">{section.title}</h1>
                    <div className=" flex flex-col gap-5 md:grid md:grid-cols-3 ">
                        {HDTTdata.slice(section.startIndex, section.endIndex + 1).map((item, index) => (
                            <Link key={index} to={`/${item.links}`}>
                                <div key={index} className="hdtt_img p-2  flex gap-4 overflow-x-auto no-scrollbar  cursor-pointer" >
                                    <img src={item.image} className="w-[100px] h-[100px]" alt="Product" />
                                    <div>
                                        <h1>{section.title} Trending</h1>
                                        <h1 className="text-green-600"><span>${255} </span> <del className="text-black opacity-70">$999</del></h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HDTT;
