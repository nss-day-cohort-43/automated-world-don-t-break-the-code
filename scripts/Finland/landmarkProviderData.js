const landmarkCollection = [
    {
        name: "",
        image: "",
    },
    {
        name: "",
        image: "",
    },
    {
        name: "",
        image: "",
    },
    {
        name: "",
        image: "",
    },
    {
        name: "",
        image: "",
    },
    {
        name: "",
        image: "",
    },
]

export const useLandmarkData = () => {
    return landmarkCollection.slice();
}

export const landmarkList = () => {


    const contentElement = document.querySelector(".landmarkList")
    const landmarks = useLandmarkData()


    let landmarkHTMLRepresentation = ""
    for(const landmark of landmarks) {
        landmarkHTMLRepresentation += Landmark(landmark)
    }


// add to the existing HTML in the content element
contentElement.innerHTML += `${landmarkHTMLRepresentation}`
}


export const Landmark = (landmarkObject) => {
    return `
        <div class="landmarkListCard">
            <div class="cardImage"> <div>${landmarkObject.name}</div>
                <img class="landmark-image" src="images/${landmarkObject.image}" alt="${landmarkObject.name}>
            </div>       
        </div>`
}


landmarkList();