import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm"
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

interface SearchParamProps {
  params: {
    type: string
  }
}

export async function generateStaticParams() {
  return [
    { type: 'restore' },
    { type: 'removeBackground' },
    { type: 'fill' },
    { type: 'remove' },
    { type: 'recolor' },
  ];
}

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps ) => {

  const { userId } = auth()

  const transformation = transformationTypes[type as TransformationTypeKey]

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId)

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage