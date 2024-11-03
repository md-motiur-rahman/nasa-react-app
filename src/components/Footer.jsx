import React from 'react'

export default function Footer({handleToggleSideBar, data}) {
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>Project NASA</h1>
        </div>
        <button>
        <i className="fa-solid fa-circle-info"  onClick={handleToggleSideBar}></i>
        </button>
    </footer>
  )
}
