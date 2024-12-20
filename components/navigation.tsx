"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    console.log("hello");
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about-us'>AboutUs</Link>
                </li>
            </ul>
        </nav>
    );
}
