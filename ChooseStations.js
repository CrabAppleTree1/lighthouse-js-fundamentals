

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function(stations) {
  const goodStations = [];
  for (const station of stations){
    const capacity = station[1];
    const venue = station[2];

    if ((capacity > 19) && ((venue === "community centre") || (venue === "school"))){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
chooseStations(stations);
console.log(goodStations) 