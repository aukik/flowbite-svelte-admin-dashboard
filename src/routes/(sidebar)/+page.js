import * as dashboard from './dashboard/+page';

/** @type {import('../(sidebar)/dashboard/$types').PageLoad} */
export function load(request) {
	return dashboard.load(request);
}

// export function decodeToken(token) {

// 	const [header, payload, signature] = token.split('.');
// 	const decodedPayload = JSON.parse(atob(payload));
// 	console.log('Decoded Payload:', decodedPayload);

// 	// Check expiration
// 	const expirationTime = decodedPayload.exp * 1000; // Convert from seconds to milliseconds
// 	const currentTime = Date.now();
// 	if (currentTime > expirationTime) {
// 		return false

// 	} else {
// 		return true
// 	}
// }
