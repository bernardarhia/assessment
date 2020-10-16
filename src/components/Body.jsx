import React from 'react'
import Form from './Form'
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div className="body__wrapper">
            <Sidebar />
            <Form />
        </div>
    )
}

export default Body
