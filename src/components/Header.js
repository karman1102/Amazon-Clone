import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, userSession, useSession } from "next-auth/client"
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    // we get two states session and loading hence the square bracket
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <div>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={50}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search */}
                <div className="hidden md:flex-grow sm:flex items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap" >
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline">
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="link font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div>
                        <p>Returns</p>
                        <p className="link font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center " onClick={() => router.push('/checkout')}>
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className="font-extrabold md:text-sm hidden md:inline">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's deals</p>
                <p className="link hidden lg:inline"> Electronics</p>
                <p className="link hidden lg:inline"> Grocery</p>
                <p className="link hidden lg:inline"> Buy Again</p>
                <p className="link hidden lg:inline"> Healthcare and Medicines</p>
            </div>
        </div>
    )
}

export default Header

