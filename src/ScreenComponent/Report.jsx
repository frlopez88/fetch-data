import React from 'react'
import { useEffect, useState } from 'react'

export const Report = () => {

    let url = import.meta.env.VITE_URL
    let token = import.meta.env.VITE_TOKEN

    const [data, setData] = useState([])
    

    const getData = async () => {

        let newURL = url + '/posts'

        let response = await fetch(newURL, {
            method: "GET",
            headers: {
                'Authorization': token,
                'apikey': token
            }
        })

        if (response.ok) {

            let jsonData = await response.json()
            setData(jsonData)
            console.log(jsonData)

        }


    }

    useEffect(() => {

        getData()

    }, [])


    return (
        <>
            <h1>Report</h1>
            <table>

                <theader>
                    <td>
                        <th>Description</th>
                        <th>Name</th>
                    </td>
                </theader>
                <tbody>

                    {
                        data.map((item) => (

                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td>{item.name}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>
        </>
    )
}
