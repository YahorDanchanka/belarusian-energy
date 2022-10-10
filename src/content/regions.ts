import { Region, Regions } from 'src/types'

export function getRegions(): Regions {
  const regions: Regions = [
    {
      id: Region.Gomel,
      neighbors: [],
      imageUrl: '/images/belarus/gomel.png',
      coords: { top: '0px', left: '0px' },
      fixed: { top: 394, left: 704 },
    },
    {
      id: Region.Brest,
      neighbors: [],
      imageUrl: '/images/belarus/brest.png',
      coords: { top: '0px', left: '0px' },
      fixed: { top: 391, left: 469 },
    },
    {
      id: Region.Grodno,
      neighbors: [],
      imageUrl: '/images/belarus/grodno.png',
      coords: { top: '0px', left: '0px' },
      fixed: { top: 227, left: 494 },
    },
    {
      id: Region.Vitebsk,
      neighbors: [],
      imageUrl: '/images/belarus/vitebsk.png',
      coords: { top: '0px', left: '0px' },
      fixed: { top: 140, left: 656 },
    },
    {
      id: Region.Mogilev,
      neighbors: [],
      imageUrl: '/images/belarus/mogilev.png',
      coords: { top: '0px', left: '0px' },
      fixed: { top: 277, left: 757 },
    },
    {
      id: Region.Minsk,
      neighbors: [],
      imageUrl: '/images/belarus/minsk.png',
      coords: { top: '0px', left: '0px' },
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
