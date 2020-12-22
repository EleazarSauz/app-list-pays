import React from 'react'

function TablePays() {
    const lisrCreators =  [
        {
            creatorName: "asidn",
            creatorId: "asd46554",
            amountValue: 20,
            kind: "SUBSCRIPTION",
            status: "REFUNDED",
            date: new Date(),
            provider: "STRIPE"
        },
        {
            creatorName: "naskjdn asnd",
            creatorId: "45444654asd",
            amountValue: 25,
            kind: "SUBSCRIPTION_RENEW",
            status: "REFUNDED",
            date: new Date(),
            provider: "CONEKTA"
        },
        {
            creatorName: "ausndj asdlam",
            creatorId: "1213",
            amountValue: 10,
            kind: "TIP",
            status: "PAID",
            date: new Date(),
            provider: ""
        },
        {
            creatorName: "ianf ajsod",
            creatorId: "jasnk588",
            amountValue: 200,
            kind: "POST",
            status: "REFUNDED",
            date: new Date(),
            provider: "STRIPE"
        },
    ]
    return (
        <div>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th className="px-4 py-3">Creator</th>
                                <th className="px-4 py-3 text-center">Amount</th>
                                <th className="px-4 py-3 text-center">Kind</th>
                                <th className="px-4 py-3 text-center">Status</th>
                                <th className="px-4 py-3 text-center">Provider</th>
                                <th className="px-4 py-3 text-right">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {
                                lisrCreators.map((i, index) => (
                                <tr className="text-gray-700 dark:text-gray-400" key={index}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold"> {i.creatorName} </p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {i.creatorId}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ {i.amountValue}
                                    </td>
                                    <td className="px-4 py-3 text-xs text-center">
                                        <span className={"px-2 py-1 font-semibold leading-tight rounded-full dark:bg-green-700 dark:text-green-100 " +  index === 3 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100" }>
                                            {i.kind}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-xs text-center">
                                        <span className={"px-2 py-1 font-semibold leading-tight rounded-full dark:bg-green-700 dark:text-green-100 " +  index === 3 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100" }>
                                            {i.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-xs text-center">
                                        <span className={"px-2 py-1 font-semibold leading-tight rounded-full dark:bg-green-700 dark:text-green-100 " +  index === 3 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100" }>
                                            {i.provider}
                                        </span>
                                    </td>
                                    
                                        <td className="px-4 py-3 text-sm text-right">
                                        {i.date.toDateString()}
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="col-span-2" />
                    <span className="flex col-span-4 mt-2 sm:mt-auto justify-center">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                        <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TablePays
