// import React, { Component } from 'react'

// class Pokedex extends Component {
// 	state = {
// 		pokemon: [],
// 	}

// 	componentDidMount() {
// 		fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
// 			.then((res) => res.json())
// 			.then((res) => {
// 				this.setState({ pokemon: res.results })
// 			})
// 			.catch((err) => console.error(err))
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.pokemon.length < 149) {
// 			fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
// 				.then((res) => res.json())
// 				.then((res) => {
// 					this.setState({ pokemon: res.results })
// 				})
// 				.catch((err) => console.error(err))
// 		}
// 	}

//     componentWillUnmount() {
//         // code block
//     }

// 	render() {
// 		return <>hello there</>
// 	}
// }

// export default Pokedex