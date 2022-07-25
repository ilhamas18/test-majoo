import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/global/header/header'
import Dashboard from './home'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Dashboard />
    </div>
  )
}
