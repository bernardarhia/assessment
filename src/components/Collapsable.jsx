import React from 'react'

const Collapsable = ({handleUSerData, options, name}) => {
    return (
        <>
           <select id="disease" name={name} style={{margin:"2rem 0"}} onChange={handleUSerData}>
               <option></option>
                {options.map((element, index)=>{
                    return <option value={element} key={index}>{element}</option>
                })}
          </select>  
        </>
    )
}

export default Collapsable
