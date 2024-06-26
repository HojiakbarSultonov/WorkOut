import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Social from '@/components/auth/Social'
import { Card } from '@/components/ui/card'
import { useAuthState } from '@/stores/auth.store'

function Auth() {
	const { authState } = useAuthState()
	return (
		<div className='w-full h-screen bg-gradient-to-t from-foreground to-background flex items-center justify-center'>
			<Card className='p-8 w-1/3 relative'>
				{authState === 'login' && <Login />}
				{authState === 'register' && <Register />}
				<Social/>
			</Card>
		</div>
	)
}

export default Auth
