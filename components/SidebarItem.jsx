import Link from "next/link";

export default function SidebarItem({ icon, color, title, path }) {
  const Icon = icon;
  return (
    <Link href={path}>
      <div
        className={`${color} font-semibold flex items-center capitalize gap-x-3 mt-3`}
      >
        <Icon className="text-xl" />
        <span>{title}</span>
      </div>
    </Link>
  );
}
