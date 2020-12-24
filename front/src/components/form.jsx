import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

    
function Form() {
    const { register, handleSubmit, errors, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = data => {
        setIsLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/v1/payment", requestOptions)
            .then(res => res.text())
            .then(result => {
                console.log(result)
                setIsLoading(false)
                reset()
            })
            .catch(error => {
                console.log('error', error)
                setIsLoading(false)
            });
    };

return (
    <div>
        <section className="text-gray-700 body-font relative">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">New payment</h1>
                </div>
                <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full sm:w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Creator</label>
                                <input type="text" id="name" name="creator" ref={register({ required: true })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    {errors.creator && <span className="text-red-400">This field is required</span>}
                            </div>
                        </div>
                        <div className="p-2 w-full sm:w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Kind</label>
                                <select id="kind" name="kind" ref={register({ required: true })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                    {
                                        ['SUBSCRIPTION', 'SUBSCRIPTION_RENEW', 'TIP', 'POST'].map((i,index) => (
                                            <option key={index} value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="p-2 w-full sm:w-1/3">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Amount value</label>
                                <input type="number" id="name" name="amountValue" ref={register({ required: true })}
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.amountValue && <span className="text-red-400">This field is required</span>}
                            </div>
                        </div>
                        <div className="p-2 w-full sm:w-1/3">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Status</label>
                                <select id="status" name="status" ref={register({ required: true })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                {
                                    ['PAID', 'REFUNDED'].map((i,index) => (
                                        <option key={index} value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="p-2 w-full sm:w-1/3">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Provider</label>
                                <select id="provider" name="provider" ref={register({ required: true })}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                >
                                {
                                    ['STRIPE', 'CONEKTA'].map((i, index) => (
                                        <option key={index} value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        
                        <div className="p-2 mt-4 w-full">
                            <button type="submit" disabled={isLoading} className="flex mx-auto text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                                Add &nbsp;
                                {
                                    isLoading ? 
                                    <i className="fas fa-lg fa-spinner fa-spin" />
                                    :
                                    <i className="fas fa-lg fa-plus" />
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
)
}

export default Form
