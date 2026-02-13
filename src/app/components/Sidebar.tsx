"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FilePlus,
  FilePen,
  PlayCircle,
  StopCircle,
  CheckCircle,
  Truck,
  User,
  Receipt,
  FileBarChart,
} from "lucide-react";

type MenuItemProps = {
  label: string;
  href?: string;
  active?: boolean;
  arrow?: boolean;
  open?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const MenuItem = ({
  label,
  href,
  active,
  arrow = false,
  open,
  icon,
  onClick,
}: MenuItemProps) => {
  const baseClass =
    "flex items-center justify-between mx-4 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition no-underline hover:no-underline";

  const activeClass = active
    ? "bg-[#EAF6F2] text-[#36656b]"
    : "text-gray-400 hover:text-gray-600";

  const content = (
    <div className={`${baseClass} ${activeClass}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="no-underline">{label}</span>
      </div>

      {arrow && (
        <span
          className={`text-xs no-underline decoration-transparent pointer-events-none ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block no-underline hover:no-underline decoration-transparent"
        style={{ textDecoration: "none" }}
      >
        {content}
      </Link>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};

export default function Sidebar() {
  const pathname = usePathname();
  const [reportOpen, setReportOpen] = useState(
    pathname.startsWith("/tms-report")
  );

  const iconClass = (active?: boolean) =>
    `w-4 h-4 ${active ? "text-[#36656b]" : "text-gray-400"}`;

  return (
    <aside className="h-screen w-64 bg-white flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-6">
        <div className="w-10 h-10 rounded-xl bg-[#36656b] text-white flex items-center justify-center text-lg font-bold">
          S
        </div>
        <h1 className="text-lg font-bold text-[#36656b]">StoneFleet</h1>
      </div>

      {/* Menu */}
      <nav className="mt-6 space-y-1 flex-1 overflow-auto">
        <MenuItem
          label="LR Booking New"
          href="/tms/lr-booking"
          active={pathname === "/tms/lr-booking"}
          icon={<FilePlus className={iconClass(pathname === "/tms/lr-booking")} />}
        />

        <MenuItem
          label="LR Creation New"
          href="/tms/lr-creation"
          active={pathname === "/tms/lr-creation"}
          icon={<FilePen className={iconClass(pathname === "/tms/lr-creation")} />}
        />

        <MenuItem
          label="Trip Start"
          href="/tms/trip-start"
          active={pathname === "/tms/trip-start"}
          icon={
            <PlayCircle className={iconClass(pathname === "/tms/trip-start")} />
          }
        />

        <MenuItem
          label="Trip Close"
          href="/tms/trip-close"
          active={pathname === "/tms/trip-close"}
          icon={
            <StopCircle className={iconClass(pathname === "/tms/trip-close")} />
          }
        />

        <MenuItem
          label="Proof of Delivery"
          href="/tms/pod"
          active={pathname === "/tms/pod"}
          icon={<CheckCircle className={iconClass(pathname === "/tms/pod")} />}
        />

        <MenuItem
          label="Vehicle Status Update"
          href="/tms/vehicle-status"
          active={pathname === "/tms/vehicle-status"}
          icon={
            <Truck className={iconClass(pathname === "/tms/vehicle-status")} />
          }
        />

        <MenuItem
          label="Driver Status Update"
          href="/tms/driver-status"
          active={pathname === "/tms/driver-status"}
          icon={<User className={iconClass(pathname === "/tms/driver-status")} />}
        />

        <MenuItem
          label="Transport Invoice"
          href="/tms/transport-invoice"
          active={pathname === "/tms/transport-invoice"}
          icon={
            <Receipt
              className={iconClass(pathname === "/tms/transport-invoice")}
            />
          }
        />

        {/* TMS Report */}
        <MenuItem
          label="TMS Report"
          active={reportOpen}
          arrow
          open={reportOpen}
          icon={<FileBarChart className={iconClass(reportOpen)} />}
          onClick={() => setReportOpen(!reportOpen)}
        />

        {reportOpen && (
          <div className="ml-10 mt-1 space-y-1 text-sm">
            <MenuItem
              label="- Trip Report"
              href="/tms-report/trip"
              active={pathname === "/tms-report/trip"}
            />
            <MenuItem
              label="- TMS MIS Report"
              href="/tms-report/tms-mis"
              active={pathname === "/tms-report/tms-mis"}
            />
            <MenuItem
              label="- MIS Sales Report"
              href="/tms-report/mis-sales"
              active={pathname === "/tms-report/mis-sales"}
            />
            <MenuItem
              label="- Vehicle Movement Report"
              href="/tms-report/vehicle-movement"
              active={pathname === "/tms-report/vehicle-movement"}
            />
            <MenuItem
              label="- Driver Status Report"
              href="/tms-report/driver-status"
              active={pathname === "/tms-report/driver-status"}
            />
            <MenuItem
              label="- Vehicle TAT Report"
              href="/tms-report/vehicle-tat"
              active={pathname === "/tms-report/vehicle-tat"}
            />
          </div>
        )}
      </nav>
    </aside>
  );
}
