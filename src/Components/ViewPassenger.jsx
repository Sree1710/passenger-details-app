import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewPassenger = () => {
    const [passData, setPassData] = useState(
        { "data": [] }
    )

    const [isLoading, setIsLoading] = useState(true)

    const apiLink = "https://api.instantwebtools.net/v1/passenger?page=0&size=30"

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setPassData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Passenger</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">No. Of Trips</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {passData.data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value._id}</th>
                                                    <td>{value.name}</td>
                                                    <td>{value.trips}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPassenger