import * as AuthSessions from "expo-auth-session"
import { createContext, useContext, useState } from "react"

const CLIENT_ID = "f884819af420f2955565"
const SCOPE = "read:user"

type User = {
  id: string
  avatar_url: string
  name: string
  login: string
}

type AuthContextData = {
  user: User | null
  isSigningIng: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthResponse = {
  token: string
  user: User
}

type AuthorizationResponse = {
  params: {
    code?: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIng, setIsSigningIng] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const authUrl = `https://github.com/login/oauth/authorize?client_id${CLIENT_ID}&scope=${SCOPE}`

  async function signIn() {
    const { params } = (await AuthSessions.startAsync({
      authUrl,
    })) as AuthorizationResponse

    console.log(params)
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isSigningIng }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
