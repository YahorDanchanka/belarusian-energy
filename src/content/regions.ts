import { random } from 'lodash'
import { Region, Regions } from 'src/types'

export function getRegions(): Regions {
  const regions: Regions = [
    {
      id: Region.Gomel,
      neighbors: [],
      imageUrl: '/images/belarus/gomel.png',
      coords: { top: random(214, window.innerHeight) - 214, left: random(287, window.innerWidth) - 287 },
      fixed: { top: 394, left: 704 },
    },
    {
      id: Region.Brest,
      neighbors: [],
      imageUrl: '/images/belarus/brest.png',
      coords: { top: random(185, window.innerHeight) - 185, left: random(269, window.innerWidth) - 269 },
      fixed: { top: 391, left: 469 },
    },
    {
      id: Region.Grodno,
      neighbors: [],
      imageUrl: '/images/belarus/grodno.png',
      coords: { top: random(232, window.innerHeight) - 232, left: random(199, window.innerWidth) - 199 },
      fixed: { top: 227, left: 494 },
    },
    {
      id: Region.Vitebsk,
      neighbors: [],
      imageUrl: '/images/belarus/vitebsk.png',
      coords: { top: random(171, window.innerHeight) - 171, left: random(286, window.innerWidth) - 286 },
      fixed: { top: 140, left: 656 },
    },
    {
      id: Region.Mogilev,
      neighbors: [],
      imageUrl: '/images/belarus/mogilev.png',
      coords: { top: random(201, window.innerHeight) - 201, left: random(282, window.innerWidth) - 282 },
      fixed: { top: 277, left: 757 },
    },
    {
      id: Region.Minsk,
      neighbors: [],
      imageUrl: '/images/belarus/minsk.png',
      coords: { top: random(277, window.innerHeight) - 277, left: random(209, window.innerWidth) - 209 },
      fixed: { top: 224, left: 642 },
    },
  ]

  regions[0].neighbors.push(regions[1])
  regions[0].neighbors.push(regions[5])
  regions[0].neighbors.push(regions[4])

  regions[1].neighbors.push(regions[2])
  regions[1].neighbors.push(regions[5])
  regions[1].neighbors.push(regions[0])

  regions[2].neighbors.push(regions[1])
  regions[2].neighbors.push(regions[5])
  regions[2].neighbors.push(regions[3])

  regions[3].neighbors.push(regions[2])
  regions[3].neighbors.push(regions[5])
  regions[3].neighbors.push(regions[4])

  regions[4].neighbors.push(regions[3])
  regions[4].neighbors.push(regions[5])
  regions[4].neighbors.push(regions[0])

  regions[5].neighbors.push(regions[0])
  regions[5].neighbors.push(regions[1])
  regions[5].neighbors.push(regions[2])
  regions[5].neighbors.push(regions[3])
  regions[5].neighbors.push(regions[4])

  return regions
}
