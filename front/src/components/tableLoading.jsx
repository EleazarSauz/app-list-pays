import React from 'react'

const TableLoading = () => {
    return (
        <tr >
            <th colspan="6">
                <div className="flex flex-col w-full items-center justify-center my-16">
                    <i className="fas fa-4x fa-spinner fa-spin" /> 
                    loading...
                </div>
            </th>
        </tr>
    )
}

export default TableLoading
