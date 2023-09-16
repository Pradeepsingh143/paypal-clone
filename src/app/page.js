import { UserDetails } from "@/globalComponents/UserDetails";
import Image from "next/image";
import Link from "next/link";

export function getTimeOfDay() {
  const currentHour = new Date().getHours();
  let timeOfDay;

  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return timeOfDay;
}

export default function Home() {
  const timeOfDay = getTimeOfDay();
  return (
    <main className="bg-accent py-20">
      <div className="container mx-auto grid grid-cols-2">
        <div className="left-col">
          <h1 className="text-3xl pb-6">
            Good {timeOfDay}, {UserDetails.username}
          </h1>

          <div className="balanceCard relative bg-white shadow rounded-md p-6">
            <h2 className="text-primary text-lg font-medium">PayPal balance</h2>
            <h3 className="text-5xl py-4 font-light">${UserDetails.Amount}</h3>
            <h4 className="text-lg font-light text-slate-700">Available</h4>
            <Link href={"/pay"}>
              <button className="px-8 h-12 mt-4 border-2 border-primary rounded-full hover:bg-primary transition ease-in-out duration-300 text-primary hover:text-white">
                <p>Transfer Money</p>
              </button>
            </Link>
            <Image
              className="absolute top-6 right-6 cursor-pointer"
              src="/menu.png"
              width={30}
              height={30}
              alt="menu"
            />
          </div>
        </div>
        <div className="right-col px-6">
          <div className="iconLink flex justify-evenly">
            <div className="send items-center text-center cursor-pointer">
              <Image
                className="bg-primary rounded-full p-2"
                src="/send.png"
                width={60}
                height={60}
                alt="send payment"
              />
              <h3 className="font-medium tracking-wide leading-loose">Send</h3>
            </div>
            <div className="send items-center text-center cursor-pointer">
              <Image
                className="bg-primary rounded-full p-2"
                src="/request.png"
                width={60}
                height={60}
                alt="Pay payment"
              />
              <h3 className="font-medium tracking-wide leading-loose">Pay</h3>
            </div>
            <div className="send items-center text-center cursor-pointer">
              <Image
                className="bg-primary rounded-full p-2"
                src="/more.png"
                width={60}
                height={60}
                alt="More options"
              />
              <h3 className="font-medium tracking-wide leading-loose">More</h3>
            </div>
          </div>
          <div className="sendAgain container mx-auto w-3/4 mt-10">
            <div className="title items-center flex justify-between">
              <h3 className="text-start text-xl text-primary font-medium">
                Send again
              </h3>
              <Image
                src="/menu.png"
                className="cursor-pointer"
                width={30}
                height={30}
                alt="menu"
              />
            </div>
            <p className="text-slate-700 py-5 text-sm">
              Send Payments to friends
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
