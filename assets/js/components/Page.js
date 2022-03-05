import React, { useEffect, useRef, useState } from 'react'

import Http from 'services/Http'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Page = ({ tag }) => {
  const [page, setPage] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.substr(1)
    Http.get(`page/${pathname}`).then((res) => {
      console.log(res)
      setPage(res)
    })
  }, [location])

  return (
    <div className="page-container">
      <>
        {page != null && (
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>
        )}
      </>
    </div>
  )
}

export default Page
