import { Card } from "@/components/card";
import Link from "next/link";

export default function RevenuePage() {
    return (
        <Card>
            Revenue Page
            <div>
                <Link href="/complex-dashboard/revenue">Default</Link>
            </div>
        </Card>
    )
}