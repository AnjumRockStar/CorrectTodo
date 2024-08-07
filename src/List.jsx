import React from 'react'

function List(props) {
  console.log(props.list)
  return (
    <>
        <h1>List Added</h1>
         {props.list.map((val, ind) => {
          return <div key = {ind}>
              <span>{val}</span>
              <span onClick={() => {
                props.delete(ind)
                }}>
                <i>-delete-</i></span>
          </div>
        })
        }

        {/* <p>{props.list}</p>
        <p>{props.setList}</p> */}
    </>
  )
}

export default List