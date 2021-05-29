import Link from "./Link";
import LinkEdit from "./LinkEdit";
import LinksAction from "./LinksAction";

export default function Links(props) {
  return (
    <div>
      <div className="fira-code text-center font-size-2 text-gray-500 tracking-wider">
        My Links
      </div>
      <LinksAction />
      <LinkEdit />
      <Link />
      <Link />
      <Link />
      <Link />
      <Link />
      <Link />
      <Link />
      <Link />
    </div>
  );
}
