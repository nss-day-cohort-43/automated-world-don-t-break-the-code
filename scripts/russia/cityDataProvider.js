const cityCollection = [
    {
        name: "Moscow",
        population: 12480481,
    },
    {
        name: "Saint Petersburg",
        population: 4879566,
    },
    {
        name: "Novosibirsk",
        population: 1625631,
    },
    {
        name: "Yekaterinburg",
        population: 1493749,
    },
    {
        name: "Kazan",
        population: 1257391,
    },
    {
        name: "Nizhny Novgorod",
        population: 1252236,
    },
]

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
            <div class="citCardImage">

                </div>
                    <ul>
                        <li>Name: ${cityObject.name}</li>
                        <li>Population: ${cityObject.population}</li>
                    </ul>
        </div>`
}


cityList();