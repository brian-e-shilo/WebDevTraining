interface FooterProps {
  year: number;
}
export default function Footer({ year }: FooterProps) {
  return <footer>© {year} Brian's Kitchen</footer>;
}
