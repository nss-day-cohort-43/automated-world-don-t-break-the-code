const leaderCollection = [
    {
        name: "Vladimir Putin",
        image: "vladimirPutin.jpg",
    },
]

export const leaderCityData = () => {
    return leaderCollection.slice();
}

export const leaderList = () => {


    const contentElement = document.querySelector(".leaderList")
    const leaders = leaderCityData()


    let leaderHTMLRepresentation = ""
    for(const leader of leaders) {
        leaderHTMLRepresentation += Leader(leader)
    }


// add to the existing HTML in the content element
contentElement.innerHTML += `${leaderHTMLRepresentation}`
}


export const Leader = (leaderObject) => {
    return `
        <div class="leaderListCard">
            <div class="cardImage"> <div>${leaderObject.name}</div>
            <img class="leader-image" src="images/${leaderObject.image}" alt="${leaderObject.name}">
            </div>       
        </div>`
}


leaderList();