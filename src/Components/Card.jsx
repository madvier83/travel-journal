import React from "react"

export default function Card(props) {
    const data = props.props;
    return (
        <>
            <section className="flex flex-col md:flex-row my-8 px-4 max-w-[480px] md:max-w-[720px] text-slate-700">
                <div className="mb-4 md:max-w-[160px] overflow-hidden bg-slate-700 rounded-md shadow-md">
                    <img src={data.img} alt="" className="object-cover md:min-h-[240px] rounded-md"/>
                </div>
                <div className="mb-4 flex-col md:ml-8 md:mt-4">
                    <div className="flex items-center mb-2 md:mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="uppercase text-[14px] tracking-widest">{data.location}</p>
                        <a href={data.locationLink} target="_blank" rel="noreferrer" className="text-[12px] text-slate-400 ml-4 underline">View on Google Maps</a>
                    </div>
                    <div className="font-bold text-3xl md:text-4xl mb-4 md:mb-8">{data.title}</div>
                    <div className="font-semibold text-sm mb-2">{data.dateStart + " - " + data.dateEnd}</div>
                    <div className="text-sm text-justify">{data.description}</div>
                </div>
            </section>
        </>
    )
}