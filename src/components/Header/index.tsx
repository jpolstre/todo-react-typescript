import React from 'react'
import { Head } from './styles'

interface OwnProps {
  title: string
}

const Header: React.FC<OwnProps> = ({title}) => {
  return (
    <Head>
      <h2>{title}</h2>
    </Head>
  )
}

export default Header