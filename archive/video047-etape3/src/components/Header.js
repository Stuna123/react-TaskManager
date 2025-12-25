import Logo from "../assets/Default.png"

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span className="light activeTheme"></span>
          <span className="medium"></span>
          <span className="dark"></span>
          <span className="gOne"></span>
          <span className="gTwo"></span>
          <span className="gThree"></span>
        </div>
      </div>
    </header>
  )
}
