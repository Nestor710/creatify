import { Badge } from "../ui/badge"

const Header = ({ title, subtitle, creditFee }: { title: string, subtitle?: string, creditFee?: number }) => {
    return (
        <>
            <div className="flex flex-row items-center gap-2">
                <h2 className="h2-bold text-dark-600">
                    {title}
                </h2>
                {creditFee && 
                    <Badge className="text-orange-500 mt-2 border-orange-500" variant="outline">Credit Fee: {creditFee}</Badge>
                }
            </div>
            {subtitle && 
                <p className="o-16-regular mt-4">{subtitle}</p>
            }
        </>
    )
}

export default Header