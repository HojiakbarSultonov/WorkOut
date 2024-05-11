import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB5LStwdRVkO7ushEQ0ZF7RdYl7JmFTJ6A',
	authDomain: 'gym-project-b8d01.firebaseapp.com',
	projectId: 'gym-project-b8d01',
	storageBucket: 'gym-project-b8d01.appspot.com',
	messagingSenderId: '150666893723',
	appId: '1:150666893723:web:ff6f07f69ac95962dae93e'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export { auth }
