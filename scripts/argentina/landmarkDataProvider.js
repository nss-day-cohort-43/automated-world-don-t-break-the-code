const landmarkCollection = [
    {
        name: "Parque Nacional Los Glaciares",
        image: "parqueLosGlaciers.jpg", 
    },
    {
        name: "Aconcagua",
        image: "aconcaqua.jpg",
    },
    {
        name: "Plaza de Mayo",
        image: "plazaDeMayo.jpeg",
    },
]
// Write a function that returns a copy of the array into a new array object. .slice method
export const useLandmarkData = () => {
    return landmarkCollection.slice();
}
// Write a function that iterates the the new array and defines the class of the html representation of each object. for of 

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

// write a function that accepts the object and returns the html representation of that object.
export const Landmark = (landmarkObject) => {
    return `
        <div class="landmarkListCard">
            <div class="cardImage"> <div>${landmarkObject.name}</div>
                <img class="landmark-image" src="images/${landmarkObject.image}" alt="${landmarkObject.name}">
            </div>       
        </div>`
}


landmarkList();