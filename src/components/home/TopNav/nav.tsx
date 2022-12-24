import CaretDown from "assets/caret-down.svg";

interface NavProps {
  name: String;
  select?: boolean;
}

const Nav = ({ select, name }: NavProps) => {
  return (
    <li className="flex items-center gap-x-2">
      {name}
      {select ? <img src={CaretDown} alt="Caret" /> : null}
    </li>
  );
};

export default Nav;
