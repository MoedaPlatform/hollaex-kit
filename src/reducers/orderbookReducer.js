const INITIAL_STATE = {
	fetched: false,
	fetching: false,
	trades: [],
	error: null,
	symbol: 'btc',
	price: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {

		case 'CHANGE_SYMBOL':
			return {
				...state,
				symbol: action.payload.symbol,
			};
		// getOrderbook
		case 'GET_ORDERBOOK_PENDING': {
			return {...state, fetching: true, fetched: false, error: null}
		}
		case 'GET_ORDERBOOK_REJECTED': {
			alert('Error: ' + action.payload)
			return {...state, fetching: false, error: action.payload}
		}
		case 'GET_ORDERBOOK_FULFILLED': {
			let bids = action.payload.data.bids
			let asks = action.payload.data.asks
			let allBids = 0 // accumulative bids amounts
			let allAsks = 0 // accumulative asks amounts
			for(let i=0; i<bids.length; i++) {
				if(bids[i]){
					allBids += bids[i][1]
					bids[i][2] = allBids
				}
				if(asks[i]){
					allAsks += asks[i][1]
					asks[i][2] = allAsks
				}
			}
			return {...state, fetching: false, fetched: true, bids, asks}
		}

		// setOrderbook
		case 'SET_ORDERBOOK': {
			let bids = action.payload.bids
			let asks = action.payload.asks
			// let allBids = 0 // accumulative bids amounts
			// let allAsks = 0 // accumulative asks amounts
			// for(let i=0; i<bids.length; i++) {
			// 	if(bids[i]){
			// 		allBids += bids[i][1]
			// 		bids[i][2] = allBids
			// 	}
			// 	if(asks[i]){
			// 		allAsks += asks[i][1]
			// 		asks[i][2] = allAsks
			// 	}
			// }
			return {...state, fetching: false, fetched: true, bids, asks}
		}

		// getTrades
		case 'GET_TRADES_PENDING': {
			return {...state, fetching: true, fetched: false, error: null}
		}
		case 'GET_TRADES_REJECTED': {
			alert('Error: ' + action.payload)
			return {...state, fetching: false, error: action.payload}
		}
		case 'GET_TRADES_FULFILLED': {
			return {...state, fetching: false, fetched: true, trades: action.payload.data}
		}

		// addTrades
		case 'ADD_TRADES': {
			return {...state, fetching: false, fetched: true, trades: action.payload.concat(state.trades), price: action.payload[0].price }
		}

		case 'LOGOUT':
			return INITIAL_STATE;
		default:
			return state;
	}
}
