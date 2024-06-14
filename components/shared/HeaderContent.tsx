'use client'
import { getUserById } from "@/lib/actions/user.actions";
import { useCreditBalanceStore } from "@/store/creditBalance";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const HeaderContent = ({ userId }: { userId: string | null }) => {

    const { credit, setCredit } = useCreditBalanceStore()

    if (!userId) redirect("/sign-in");

    useEffect(() => {
        const getCredit = async () => {
            const user = await getUserById(userId);
            setCredit(user.creditBalance)
        }

        getCredit().catch(console.error)
    }, [setCredit, userId])
  


    return (
        <div className="header-container">
            <div className="header-content">
                <h3 className="font-semibold">
                    Credits: <span className="text-orange-500">{credit}</span>
                </h3> 
            </div>
        </div>
    )
}

export default HeaderContent