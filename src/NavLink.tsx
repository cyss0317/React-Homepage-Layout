interface NavLinkProps {
  title: string;
  href: string;
}

export default function NavLink(props: NavLinkProps) {
  const { title, href } = props;
  return (
    <li className="hover:scale-125">
      <a href={`${href}`}>{title}</a>
    </li>
  );
}
