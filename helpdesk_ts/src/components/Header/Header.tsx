import helpdeskImg from "../../assets/4.jpg";
function Header() {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <div className="w-32 font-bold text-3xl">Helpdesk</div>
      <div>
        <img src={helpdeskImg} />
      </div>
    </div>
  );
}

export default Header;
