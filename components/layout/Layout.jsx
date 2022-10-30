import AppHeader from "../appHeader/AppHeader"

export default function Layout({ children }) {
    return (
      <>
        <AppHeader/>
        <main>{children}</main>
      </>
    )
  }