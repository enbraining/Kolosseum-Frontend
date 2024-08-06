"use client"

import Layout from './layout/Layout'
import { H1 } from './styled/Text'

export default function NotFound() {
  return (
    <Layout>
        <div className='text-center mt-10'>
            <H1>Not Found</H1>
            <p>해당 페이지를 찾을 수 없습니다.</p>
        </div>
    </Layout>
  )
}
