import Image from "next/image";
import React from "react";
import { gridConfig } from "../../types";
import './style.css'
import Link from "next/link";

const ResponsiveGrid = ({config}:{config:gridConfig[]}) => {
  return (
    <div className="grid-height">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Linha de cima: 3 blocos */}
        <Link href={`/search/?tags=${config[0].name}`} className="rounded-lg h-72 text-white overflow-hidden relative cursor-pointer hover:scale-105">
          <Image src={config[0].url} width={410} height={200} alt={config[0].name} className="blur-sm grid-image"/>
          <div className="flex items-center justify-center  absolute top-0 h-full w-full z-10 text-4xl">{config[0].name}</div>
        </Link>

        <Link href={`/search/?tags=${config[1].name}`} className="rounded-lg h-72 text-white overflow-hidden relative cursor-pointer hover:scale-105">
          <Image src={config[1].url} width={410} height={200} alt={config[1].name} className="blur-sm grid-image"/>
          <div className="flex items-center justify-center  absolute top-0 h-full w-full z-10 text-4xl">{config[1].name}</div>
        </Link>

        <Link href={`/search/?tags=${config[2].name}`}  className="rounded-lg h-72 text-white overflow-hidden relative cursor-pointer hover:scale-105">
          <Image src={config[2].url} width={410} height={200} alt={config[2].name} className="blur-sm grid-image"/>
          <div className="flex items-center justify-center  absolute top-0 h-full w-full z-10 text-4xl">{config[2].name}</div>
        </Link>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Linha de baixo: 2 blocos */}
        <Link href={`/search/?tags=${config[3].name}`} className="rounded-lg text-white overflow-hidden relative cursor-pointer hover:scale-105">
          <Image src={config[3].url} width={620} height={200} alt={config[3].name} className="blur-sm grid-image"/>
          <div className="flex items-center justify-center  absolute top-0 h-full w-full z-10 text-4xl">{config[3].name}</div>
        </Link>
        
        <Link href={`/search/?tags=${config[4].name}`} className="rounded-lg text-white overflow-hidden relative cursor-pointer hover:scale-105">
          <Image src={config[4].url} width={620} height={200} alt={config[4].name} className="blur-sm grid-image"/>
          <div className="flex items-center justify-center  absolute top-0 h-full w-full z-10 text-4xl">{config[4].name}</div>
        </Link>

      </div>
    </div>
  );
};

export default ResponsiveGrid;
