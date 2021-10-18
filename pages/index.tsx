import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const [game, setGame] = React.useState('');
  const [input,setInput] = React.useState('');

  const fetchFn = async (game:string) => {
    const response = await fetch("/api/search-game-db", {
      method: 'POST',
      body: game
    });
    const data = response.json();
    return data;
  }

  const { data, isLoading } = useQuery(['searchedGame',game], () => fetchFn(game));

  const handleSubmit = (e: any) => {
    setGame(input)
    e.preventDefault();
  }

  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <Layout>
      <Head>
        <title>Backlog Blitz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit} className="py-8">
        <label>
          Enter a game
          <input type="text" value={input} onChange={handleChange} />
          <input type="submit" />
        </label>
      </form>
      <h2 className="text-xl font-bold">Matched results from API:</h2>
      {isLoading ? <span>Loading results...</span> : <ul>{data?.map((result:any) => <li key={result.id}>{result.name}</li>)}</ul>}
    </Layout>
  )
}

export default Home
