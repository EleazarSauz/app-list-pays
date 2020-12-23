import React, { useEffect, useState } from 'react'
import TableLoading from './tableLoading'

function TablePays() {
    const [infoPagination, setInfoPagination] = useState(null)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {

        setIsLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("http://localhost:3001/v1/payment?limit=8&page="+page, requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setInfoPagination(result)
                setIsLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setIsLoading(false)
            });
        
    }, [page])

    return (
        <div className="max-w-4xl mx-auto">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full whitespace-no-wrap table-auto">
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
                            {isLoading ? <TableLoading/> :
                                infoPagination && infoPagination.docs.map((i, index) => (
                                <tr className="text-gray-700 dark:text-gray-400" key={index}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold"> {i.creator} </p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    {i._id}
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
                                        {new Date(i.createdAt).toDateString()}
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                        Showin {infoPagination && `${((infoPagination.page - 1) * infoPagination.limit) + 1 } - ${(infoPagination.page * infoPagination.limit) > infoPagination.totalDocs ? infoPagination.totalDocs :(infoPagination.page * infoPagination.limit)}` } of {infoPagination && infoPagination.totalDocs}
                    </span>
                    <span className="col-span-2" />
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                {
                                    (infoPagination && infoPagination.hasPrevPage) &&
                                    <li>
                                        <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue" onClick={() => setPage(page - 1)}>
                                            <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                                        </button>
                                    </li>
                                }
                                {
                                    Array.from({ length: infoPagination ? infoPagination.totalPages : 0 }, (_, i) => i + 1).map((i,index)=> (
                                    <li key={index}>
                                        <button onClick={() => setPage(i)}
                                        className={infoPagination.page === i ? "px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-blue":"px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"}>
                                            {i}
                                        </button>
                                    </li>
                                    ))
                                }
                                {
                                    (infoPagination && infoPagination.hasNextPage) &&
                                    <li>
                                        <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-blue" onClick={() => setPage(page + 1)}>
                                            <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                                        </button>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </span>
                </div>

                {/* <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="col-span-2" />
                    <span className="flex col-span-4 mt-2 sm:mt-auto justify-center">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue" onClick={() => setPage(page - 1)}>
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-blue" onClick={() => setPage(page + 1)}>
                                        <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div> */}
            </div>
        </div>
    )
}

export default TablePays
