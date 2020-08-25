const cityCollection = [
    {
        name: "Helsinki",
        title: "Capital",
        population: 1268296,
    },
    {
        name: "Rovaniemi",
        population: 63000,
    },
    {
        name: "Oulu",
        population: 208939,
    },
    {
        name: "Kajaani",
        population: 36943,
    },
    {
        name: "Kuopio",
        population: 118667,
    },
];


// makes a copy of cityCollection
export const useCityData = () => {
    return cityCollection.slice();
}

export const cityList = () => {


    const contentElement = document.querySelector(".cityList")
    const cities = useCityData()


    let cityHTMLRepresentation = ""
    for(const city of cities) {
        cityHTMLRepresentation += City(city)
    }


// add to the existing HTML in the content element
contentElement.innerHTML += `${cityHTMLRepresentation}`
}


export const City = (cityObject) => {
    return `
        <div class="cityListCard">
            <div class="cityCardImage">

                </div>
                    <ul>
                        <li>Name: ${cityObject.name}</li>
                        <li>Population: ${cityObject.population}</li>
                    </ul>
        </div>`
}


cityList();