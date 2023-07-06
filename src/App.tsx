import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	const [moviesData, setMoviesData] = useState<any>([])
	useEffect(() => {
		fetchData()
	}, [])
	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/data')
			const jsonData = await response.json()
			setMoviesData(jsonData)
		} catch (error) {
			console.error('Error', error)
		}
	}
	return (
		<div className='App'>
			{moviesData ? (
				<div className='movie-data-main'>
					{moviesData.map((data: any, index: any) => {
						return (
							<div className='movie-container' key={index}>
								<div>Movie Name - {data.Title}</div>
								<div>Rate - {data.Rated}</div>
								<div>Released date - {data.Released}</div>
							</div>
						)
					})}
				</div>
			) : (
				<h2>loading</h2>
			)}
		</div>
	)
}

export default App
