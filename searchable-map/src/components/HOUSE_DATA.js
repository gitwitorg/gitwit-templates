import { v4 as uuidv4 } from 'uuid'; // uuid@8.3.2

export default HOUSE_DATA = [
  {
    id: uuidv4(),
    location: [-122.4238, 37.7605],
    title: 'EPIC Mansion',
    description:
      'Experience elevated living in our fully furnished suites with stunning city views. All utilities included and flexible leases available.'
  },
  {
    id: uuidv4(),
    location: [-122.431, 37.7719],
    title: 'Innovators Paradise',
    description:
      'Our co-living space is equipped with state-of-the-art co-working space, a gourmet kitchen, and luxurious bedroom suites with private bathrooms.'
  },
  {
    id: uuidv4(),
    location: [-122.4393, 37.7651],
    title: 'Founder Oasis',
    description:
      'Network and collaborate with like-minded entrepreneurs in our exclusive co-living space made just for you.'
  }
];