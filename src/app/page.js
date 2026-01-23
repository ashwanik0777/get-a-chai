import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] text-center ">
        <div className="text-5xl font-bold flex justify-center items-center">Buy Me a Chai <span><img className="invertImg" src="/tea.gif" alt="gif" width={88} /></span></div>
        <p>A crowdFunding plateform for creator. Get funded by your fans and followers. start now!</p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
         <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>
      <div className="text-white container mx-auto py-32">
        <h2 className="text-3xl font-bold text-center mb-14">Your fans can buy you a chai</h2>
        <div className="flex md:flex-row gap-5 justify-around flex-col">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" width={88} src="/man.gif" alt="gif" />
            <p className="font-bold">fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full" width={88} src="/coin.gif" alt="gif" />
            <p className="font-bold">fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1" width={88} src="/group.gif" alt="gif" />
            <p className="font-bold">fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">
      </div>
      <div className="text-white container mx-auto py-32 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* responsive iframe video */}
        
        <iframe className="md:w-[560] md:h-[315] h-96 w-[340]"  src="https://www.youtube.com/embed/QtaorVNAwbI?si=BCN2Wwa7YN0TjY2P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        
      </div>
    </>
  );
}