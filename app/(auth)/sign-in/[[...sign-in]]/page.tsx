import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
    return <SignIn appearance={{
      elements: {
        headerSubtitle: 'hidden',
        footer: 'hidden',
        footerLink: 'hidden',
      }
    }} />
  }
  
  export default SignInPage