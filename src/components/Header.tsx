import logo from "../assets/Logo.png";
export function Header() {
  return (
    <header className="w-screen h-[12rem] bg-gray700">
      <img src={logo} alt="" className="pl-[54rem] pt-[4.5rem] pb-[5rem]" />
    </header>
  );
}
