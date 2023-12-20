import { useAuthContext } from './useAuthContext'
// import { useFlashStackContext } from './FlashStackContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  // const { dispatch : FlashStackDispatch } = useFlashStackContext()

  const logout = () => {
    localStorage.removeItem('user')

    dispatch({ type: 'LOGOUT' })
    // FlashStackDispatch({ type: SET_FLASHSTACK, payload: null})
  }

  return { logout }
}
