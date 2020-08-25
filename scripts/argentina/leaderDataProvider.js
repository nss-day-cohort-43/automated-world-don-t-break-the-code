const leaderCollection = [
    {
        name: "Alberto Fernandez",
        image: "alberto.jpeg", 
    },
    
]

export const leaderData = () => {
    return leaderCollection.slice();
}

export const leaderList = () => {


    const contentElement = document.querySelector(".leaderList")
    const leaders = leaderData()


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