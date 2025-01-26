import Image from "next/image";
import Header from './components/ui/header'
import ResponsiveGrid from './components/ui/categories-block'
import SideFilter from './components/ui/side-filter'
import { gridConfig } from "./components/types";

export default function Home() {
  const gridConfig:gridConfig[] = [
    {url:'/img/2bxxx.jpg', name:'3D'},
    {url:'/img/2d.jpg', name: '2D'},
    {url:'/img/hinata.webp', name: 'Anime'}, 
    {url:'/img/hugeass.jpg', name:'Huge Ass'}, 
    {url:'/img/anal.jpg', name:'Anal'}
  ]
  return (
    <div className="h-full">
      <Header/>
      
      <main className="flex flex-col sm:w-full lg:w-10/12 mx-auto items-center sm:items-start page-height">
        <h1 className="title text-center w-full my-4">Popular categories</h1>
        
        <div className="flex items-center gap-4 ">
            <div className="max-lg:hidden">
            <SideFilter/>
            </div>
            <ResponsiveGrid config={gridConfig}/>
          
        </div>
        
        
      </main>


    </div>
  );
}
