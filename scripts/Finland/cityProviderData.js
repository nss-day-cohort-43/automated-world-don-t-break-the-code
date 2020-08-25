const cityCollection = [
    {
        name: "",
        population: ,
    },
    {
        name: "",
        population: ,
    },
    {
        name: "",
        population: ,
    },
    {
        name: "",
        population: ,
    },
    {
        name: "",
        population: ,
    },
    {
        name: "",
        population: ,
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
            <div class="cardImage">

                </div>
                    <ul>
                        <li>Name: ${cityObject.name}</li>
                        <li>Population: ${cityObject.population}</li>
                    </ul>
        </div>`
}


cityList();