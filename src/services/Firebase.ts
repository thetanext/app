import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { FIREBASE_CONFIG } from '@scaine-io/types'
// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG)
export const auth = getAuth(app)
export const db = getFirestore(app)
const storage = getStorage(app)

// run npm start for local development
// run npm run start:prod for production
if (import.meta.env.VITE_ENV === 'dev') {
	console.log('Connecting to Firebase emulators...')

	// Connect to Firestore emulator
	connectFirestoreEmulator(db, 'localhost', 8080)

	// Connect to Auth emulator
	// connectAuthEmulator(auth, 'http://localhost:9099')

	// Connect to Storage emulator
	connectStorageEmulator(storage, 'localhost', 9199)
}

export { storage }

// Function to generate a random Firestore ID for client-side use
export function generateId(): string {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let autoId = ''
	for (let i = 0; i < 20; i++) {
		autoId += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return autoId
}