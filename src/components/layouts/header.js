import Link from "next/link"
export default function Header  (){
    return(
        <>
          <header  className="flex items-center justify-between my-1">
    <Link className="text-primary " href="/" >
      ST PIZZA
    </Link>
     <nav className="flex gap-4 text-gray-700 font-semibold  items-center">
      <Link href={"/"}>Home</Link>
      <Link href="/test">Menu</Link>
      <Link href="/test">About</Link>
      <Link href="/test">Contact</Link>

     </nav>
     <nav>
     <Link href="/test" className="text-gray-700 font-semibold">Login</Link>

     <Link href="/register" className="bg-primary px-4 py-1 mx-1 rounded-full font-semibold">Register</Link>

     </nav>
   </header>
   </>
    )
}