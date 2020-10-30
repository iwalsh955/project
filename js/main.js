const data = window.data;
// use the data constant above to get the data from
// the data.js file - I've already done that for you!


data.forEach(car => {
    //if isAvailable:true
    if(car.isAvailable)
    {
        //create div
        let divElement = document.createElement('div');
        divElement.setAttribute("class", "card");

        //add property name and value
        let UnorderLst = document.createElement('ul');

        let liTag = document.createElement('li');
        liTag.innerText = "Make: " + car.make;
        UnorderLst.appendChild(liTag);

        liTag = document.createElement('li');
        liTag.innerText = "Model: " + car.model;
        UnorderLst.appendChild(liTag);

        liTag = document.createElement('li');
        liTag.innerText = "Msrp: $" + car.msrp + ".00";
        UnorderLst.appendChild(liTag);

        liTag = document.createElement('li');
        liTag.innerText = "Number Available: " + car.numberAvailable;
        UnorderLst.appendChild(liTag);

        divElement.appendChild(UnorderLst);

        let img = document.createElement('img');
        img.setAttribute("src", ".\\images\\"+car.model+".jpg");

        divElement.appendChild(img);

        document.body.append(divElement);
    }
});


