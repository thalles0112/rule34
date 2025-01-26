'use client'
import Link from "next/link"
import './style.css'

export default function SideFilter(){
    const tags = [
        {
            title: "Copyright",
            items: [
              { name: "frieren beyond journey's end", quantity: 2200 },
              { name: "legend of queen opala", quantity: 4822 },
              { name: "sousou no frieren", quantity: 11822 },
              { name: "world of warcraft", quantity: 83379 },
              { name: "laquadia (legend of queen opala)", quantity: 517 },
              { name: "sylvanas windrunner", quantity: 3574 },
              { name: "ubel (sousou no frieren)", quantity: 1025 },
            ],
        },
        {
            title: "Artist",
            items:[
              { name: "seramic seven", quantity: 918 },
            ],
        },
        {
            title:"General",
            items:[
              { name: "1girls", quantity: 3326322 },
              { name: "anal", quantity: 854115 },
              { name: "anal sex", quantity: 536344 },
              { name: "blowjob", quantity: 226523 },
              { name: "deepthroat", quantity: 95426 },
              { name: "doggy style", quantity: 245612 },
              { name: "female", quantity: 5613747 },
              { name: "female focus", quantity: 644003 },
              { name: "female only", quantity: 1543246 },
              { name: "from below", quantity: 39640 },
              { name: "green eyes", quantity: 622102 },
              { name: "half-closed eyes", quantity: 199289 },
              { name: "huge ass", quantity: 587519 },
              { name: "huge breasts", quantity: 1394399 },
              { name: "huge cock", quantity: 528090 },
              { name: "light-skinned female", quantity: 695877 },
              { name: "looking at viewer", quantity: 1794158 },
              { name: "moon", quantity: 29645 },
              { name: "nipples", quantity: 3045975 },
              { name: "nipples outside", quantity: 5401 },
              { name: "orc male", quantity: 16707 },
              { name: "pants down", quantity: 56726 },
              { name: "parted lips", quantity: 63774 },
              { name: "partially clothed", quantity: 212130 },
              { name: "ponytail", quantity: 348720 },
              { name: "purple eyes", quantity: 373858 },
              { name: "rain", quantity: 4679 },
              { name: "raining", quantity: 5583 },
              { name: "short hair", quantity: 890457 },
              { name: "solo", quantity: 2910963 },
              { name: "solo female", quantity: 458704 },
              { name: "solo focus", quantity: 543538 },
              { name: "sweatdrop", quantity: 167656 },
              { name: "upskirt", quantity: 41765 },
            ],
            },
            {
            title: 'Meta',
            items:[
              { name: "2d", quantity: 213180 },
              { name: "ai generated", quantity: 1051067 }
            ]
          }
          
    ]

    const handleFilter = (name) =>{
        const filterEvent = new CustomEvent('search', {detail:{tags:name}})
        window.dispatchEvent(filterEvent)
    }
    return(
        <aside className="w-96 rounded-md p-2  shadow-md overflow-y-scroll filter-height">
            <h2 className="text-2xl">Filters</h2>
            <ul>
            {
                tags.map((tag,idx)=>{
                    return(
                        <ul className="" key={idx}>
                            <h3 className="font-semibold">{tag.title}</h3>
                            {tag.items.map((item, idx)=>{
                                return(
                                    <Link onClick={()=>{handleFilter(item.name)}} key={idx} href={`/search/?tags=${item.name}`}>
                                    <li className="pl-4 mb-1" >
                                        <span className="hover:underline hover:text-lime-600">{item.name}</span> <span className="bg-lime-200 p-1 text-black rounded">{item.quantity}</span>
                                    </li>
                                    </Link>
                                )
                            })}
                        </ul>       
                    )
                })
            }
            </ul>
        </aside>
    )
}