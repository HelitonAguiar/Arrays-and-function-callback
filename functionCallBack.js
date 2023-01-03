
const callForHisFriendCallback = () => {
    console.log("Calling fot his friend ...... ");
}

const goToBackery = (callback) => {
    console.log("Going to the bakery ...... ");
    setTimeout(() => {
        callback();
    }, 3000)
}

goToBackery(callForHisFriendCallback);