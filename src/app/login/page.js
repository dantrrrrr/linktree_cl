import LoginWitGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
    return (
        <div className=" p-4 max-w-xs mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Sign In </h1>
            <p className="text-center mb-6 font-light text-gray-500 text-sm">sign in to your account using one of the methods below</p>
            <LoginWitGoogle />


        </div>
    );
}