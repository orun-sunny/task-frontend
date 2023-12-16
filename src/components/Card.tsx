"use client";

import Image from "next/image";
import timeLine from "../assets/time.png";
import book from "../assets/book.png";
import people from "../assets/people.png";
import { ICard } from "@/types/common";
const Card = ({ card }: { card: ICard }) => {
  const {
    title,
    description,
    image,
    price,
    discount,
    free,
    time,
    like,
    comment,
    header,
    extra
  } = card;
  return (
    <>
      
  
    <div
      className="w-[234px] rounded-[10px] bg-white transform
    transition duration-500 hover:scale-90 justify-center items-center hover:shadow-md"
    >
      <div className="pb-4  text-center ">
      
      <p className="text-[#818181] text-xs  text-center">
            {header}
            <br />
           <a className="font-bold"> {extra}</a>
          </p>
    </div>
      <Image
        className="h-[157px] rounded-t-xl object-cover"
        src={image}
       
        priority
        alt={"one"}
      />
      <div className="flex flex-col justify-between p-[10px]">
        <div>
          <h2 className="text-base font-semibold text-black line-clamp-1">
            {title}
          </h2>
          <p className="text-dimBlack text-xs mt-2 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex justify-between text-black text-xs items-center mt-2">
          {discount && <p className="line-through">${price}</p>}
          {free ? (
            <p className="text-primary font-medium">FREE</p>
          ) : discount ? (
            <p className="text-primary font-medium">${price - discount}</p>
          ) : (
            <p className="text-primary font-medium">${price}</p>
          )}
          {discount && (
            <p className="bg-highlight rounded-full text-[10px] font-normal py-[2px] px-[5px]">
              You Save <span>${discount}</span>
            </p>
          )}
        </div>
      </div>
      <div className="flex border-t-[0.5px]  p-[10px] text-black text-xs items-start gap-[11px]">
        <p className="flex items-center gap-1">
          <Image src={timeLine} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{time}</span>
        </p>
        <p className="flex items-center gap-1">
          <Image src={people} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{like}</span>
        </p>
        <p className="flex items-center gap-1">
          <Image src={book} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{comment}</span>
        </p>
      </div>
    </div>

    </>
  );
};
export default Card;
