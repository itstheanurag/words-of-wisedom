const ADIVCE_URL = `https://api.adviceslip.com/advice`;

const loadData = async () => {
    console.log("click")
    const adviceData = await fetchAdvice()
    const { id, advice } = adviceData.slip
    document.getElementById("heading").innerHTML = `Advice ${id}`
    document.getElementById("content").innerHTML = `${advice}`

}

const fetchAdvice = async () => {
    const response = await fetch(ADIVCE_URL)
    const data = await response.json()
    return data
}


const btn = document.getElementById("btn");
btn.addEventListener("click", loadData)


