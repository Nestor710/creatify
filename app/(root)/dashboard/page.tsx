import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getUserImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserById } from "@/lib/actions/user.actions"

const Home = async ({ searchParams }: SearchParamProps) => {
	const page = Number(searchParams?.page) || 1;
	const { userId } = auth();

	if (!userId) redirect("/sign-in");

	const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id })

	return (
		<>
			<section className="home">
				<h1 className="home-heading">Bring Your Ideas to Life with Creatify</h1>
				<ul className="flex-center w-full gap-20">
					{navLinks.slice(1, 7).map((link) => (
						<Link
							key={link.route}
							href={link.route}
							className="flex-center flex-col gap-2"
						>
							<li className="flex-center w-fit rounded-full bg-white p-4 shadow-md shadow-white hover:shadow-white hover:shadow-lg hover:scale-110 transition-all">
								<Image
									src={link.icon}
									alt="Image"
									width={link.iconWidth || 24}
									height={link.iconHeight || 24}
								/>
							</li>
							<p className="p-14-medium text-center text-white">{link.label}</p>
						</Link>
					))}
				</ul>
			</section>
			<section className="sm:mt-12">
				<Collection
					images={images?.data}
					totalPages={images?.totalPages}
					page={page}
				/>
			</section>
		</>
  )
}

export default Home