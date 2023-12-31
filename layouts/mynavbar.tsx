import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, usePagination, useLink} from "@nextui-org/react";
import {AcmeLogo} from "../components/AcmeLogo.jsx";
import { useRouter } from "next/router.js";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname: currentRoute } = useRouter()    

  const menuItems = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "products",
      href: "/products",
    },
    {
      label: "about",
      href: "/about",
    },
    {
      label: "DigMenu",
      href: "/online-menu",
    },
    {
      label: "contact",
      href: "/contact",
    },
    {
      label: "phone",
      href: "/phone",
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link color="foreground" href="/">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACMEE</p>
        </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(({label, href}, index) => (
          <NavbarItem isActive={currentRoute === href} key={`${label}-${index}`}>
            <Link className="capitalize" color="foreground" href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth?mode=login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth?mode=signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full capitalize"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        
      </NavbarMenu>
    </Navbar>
  );
}
