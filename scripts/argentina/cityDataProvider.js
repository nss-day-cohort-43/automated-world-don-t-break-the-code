const cityCollection = [
    {
        name: "Buenos Aires",
        population: 2890000
    },
    {
        name: "Mendoza",
        population: 115041
    },
    {
        name: "Rosario",
        population: 910000
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
            <div class="cityCardImage">

                </div>
                    <ul>
                        <li>Name: ${cityObject.name}</li>
                        <li>Population: ${cityObject.population}</li>
                    </ul>
        </div>`
}


cityList();